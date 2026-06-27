/*Where users search, select funds
│   and see side-by-side comparison
│   with charts. */
import { useEffect, useState } from 'react';
import './Compare.css';
import FundSearchSlot from '../../components/compare/FundSearchSlot'
import FundSummaryCard from '../../components/compare/FundSummaryCard'
import ReturnsLineChart from '../../components/compare/ReturnsLineChart'
import RiskRadarChart from '../../components/compare/RiskRadarChart'
import AllocationDonutChart from '../../components/compare/AllocationDonutChart'
import KeyInsights from '../../components/compare/KeyInsights'
import WinnerSection from '../../components/compare/WinnerSection'
import { useNavigate } from 'react-router-dom';

function Compare(){
    
    const [selectedFunds, setSelectedFunds] = useState([null,null,null]);   // MF value in each slot
    const [activeSlot, setActiveSlot] = useState(null); // which slot is active currently means in which slot user is currently typing
    const [searchQuery, setSearchQuery] = useState("");
    const [allFunds, setAllFunds] = useState([]);
    const [filteredFunds, setFilteredFunds] = useState([]);
    const [loading,setLoading] = useState(true);
    const[showComparison,setShowComparison] = useState(false);
    const[fundDetails, setFundDetails] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        fetch("https://api.mfapi.in/mf")
        .then(res => res.json())
        .then(data => {
            console.log(data.length)
            setAllFunds(data)
            setLoading(false)
        })
        .catch(err => {
            console.log(err)
            setLoading(false)
        })
        
    },[])

    useEffect(() => {
        if(searchQuery === ""){
            setFilteredFunds([]);
        }else{
            const filtered = allFunds.filter(fund => (
                fund.schemeName.toLowerCase().includes(searchQuery.toLowerCase())
            ))
            setFilteredFunds(filtered);
            console.log(filtered.length);
        }
    }, [searchQuery])


    const removeFund = (index) => {
        const setNull = [...selectedFunds];
        setNull[index] = null;
        setSelectedFunds(setNull);

    }

    const updateFund = (index,fundData) => {
        const updated = [...selectedFunds];
        updated[index] = fundData;
        setSelectedFunds(updated);
        setSearchQuery("");
        setActiveSlot(null);
    }

    const selectedCount = selectedFunds.filter((fund) => fund != null).length;

    const handleCompare = async () => {
        setShowComparison(false)
        setLoading(true)

        const fundsToFetch = selectedFunds.filter(f => f !== null)

        const promises = fundsToFetch.map(fund =>
            fetch(`https://api.mfapi.in/mf/${fund.schemeCode}`)
                .then(res => res.json())
        )

        const results = await Promise.all(promises)
        setFundDetails(results)
        setLoading(false)
        setShowComparison(true)
}

    return(
        <div className="compare-page">

            <section className="fund-selection">
                <div className='slots'>
                    {selectedFunds.map((fund,index) => (
                        <div className='fund-slot' key={index}>
                            {fund ? (
                                <div className = "filled-slot">
                                    <h4>{fund.schemeName}</h4>
                                    <button onClick={() => removeFund(index)}>X</button>
                                </div>
                                ): activeSlot === index ? (
                                <div>
                                    <input 
                                    type="text"
                                    placeholder='Search mutual fund'
                                    autoFocus
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}/>

                                    <div className="dropdown">          {/* ← correct class name */}
                                        {filteredFunds.slice(0,8).map((fund, i) => (
                                            <div
                                                key={i}
                                                className="dropdown-item"
                                                onClick={() => updateFund(activeSlot, fund)}
                                            >
                                                {fund.schemeName}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                ): (
                                    <button onClick={() => setActiveSlot(index)}>
                                        + Add Fund
                                    </button>
                                )
                            }
                        </div>
                    ))}
                </div>
                

                <div className='compare-btn'>
                    <button disabled={selectedCount<2} onClick={handleCompare}>
                        { selectedCount === 0 
                            ? `Add Funds`
                            :  selectedCount === 1
                            ?  `Select atleast 1 more fund`
                            : selectedCount === 2
                            ?  `Compare 2 Funds`
                            : `Compare 3 Funds`
                        }
                    </button>
                </div>
                
            </section>
            
            {showComparison && (
                <section className='comparision-results'>
                    <div className="summary-cards">
                        {fundDetails.map((fund, index) => (
                            <FundSummaryCard
                                key={index}
                                fund={fund}
                                index={index}
                                navigate={navigate}
                            />
                        ))}
                    </div>

                    <ReturnsLineChart fundDetails={fundDetails} />
                    <AllocationDonutChart fundDetails={fundDetails} />
                    <KeyInsights fundDetails={fundDetails} />
                    <WinnerSection fundDetails={fundDetails} />

                </section>
                
            )}
            
        </div>

    );
}

export default Compare;