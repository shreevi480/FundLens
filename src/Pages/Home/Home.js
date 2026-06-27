/*Your landing page. Head section +
│   features section + how it works. + why to compare before investing + popular MFunds
│   First thing users see. */

import './Home.css';
import {FiSearch} from "react-icons/fi"
import { AiOutlineBarChart } from "react-icons/ai";
import { HiOutlineDocumentSearch } from "react-icons/hi";
import { IoGitCompareOutline } from "react-icons/io5";
import {useNavigate} from 'react-router-dom';

function Home () {

    const feature = [
        { index: 1, icon: <FiSearch/> ,title: "Smart Search", desc:"Quickly find and explore mutual funds."},
        { index: 2, icon: <IoGitCompareOutline/> , title: "Side-by-Side Comparison", desc:"Compare returns, risk, AUM, and expense ratios."},
        { index: 3, icon: <AiOutlineBarChart/> , title: "Interactive Visualizations", desc:"Understand performance through charts and allocation breakdowns."},
        { index: 4, icon: <HiOutlineDocumentSearch/> , title: "Detailed Fund Insights", desc:"Explore holdings, sectors, and fund information."},
    ]

    const working=[
        {i: 1, title: " Search Funds ", desc: " Browse through a curated collection of mutual funds and quickly find the ones that match your interests. FundLens makes it easy to discover funds and access essential information needed for further analysis."},
        {i: 2, title: " Compare Funds ", desc: " Select mutual funds and view their key metrics in a single comparison dashboard. By placing important data points next to each other, you can better understand how different funds perform and identify meaningful differences."},
        {i: 3, title: " Analyze Performance", desc: " Explore interactive charts and visualizations that transform complex financial data into easy-to-understand insights. Performance trends, risk indicators, and allocation breakdowns help you evaluate funds more effectively."},
        {i: 4, title: "Deep Dive Into a Fund ", desc: " Dive deeper into individual mutual funds through dedicated detail pages containing comprehensive information. Learn about fund objectives, management, portfolio composition, and other factors that contribute to overall performance."},
    ]

    const popularFunds = [
        {idx: 1, schemecode: 122639 , name:"Parag Parikh Flexi Cap Fund", category:"Flexi Cap", risk:"Moderate", oneYreturn:"15.2%", expenseratio:"0.75%"},
        {idx: 2, schemecode: 118834 , name:"HDFC Index S&P BSE Sensex Fund", category:"Index Fund", risk:"Moderate", oneYreturn:"13.8%", expenseratio:"0.20%"},
        {idx: 3, schemecode: 118778 , name:"Nippon India Small Cap Fund", category:"Small Cap", risk:"High", oneYreturn:"24.5%", expenseratio:"0.85%"},
        {idx: 4, schemecode: 120586 , name:"ICICI Prudential Bluechip Fund", category:"Large Cap", risk:"Moderate", oneYreturn:"12.9%", expenseratio:"0.91%"},
        {idx: 5, schemecode: 125497 , name:"SBI Contra Fund", category:"Contra Fund", risk:"High", oneYreturn:"18.7%", expenseratio:"0.71%"},
        {idx: 6, schemecode: 120505 , name:"Quant Mid Cap Fund", category:"Mid Cap", risk:"High", oneYreturn:"21.3%", expenseratio:"0.64%"},     
    ]

    const navigate = useNavigate();
    
    return(
        <div className= "home">

            <section className="head">
                <h2>Find the Right Fund for Your Financial Goals</h2>
                <p>Compare performance, risk, and portfolio composition in one powerful dashboard.</p>

                <button 
                    className="hero-btn"
                    onClick={() => navigate('/compare')}
                >
                    Start Comparing →
                </button>
            </section>

            <section className="features-section">
                <h2>Key Features</h2>
                <section className='features'>
                    {feature.map((point,index) => (
                        <div className="feature-card" key={index}>
                            <div className="icon">{point.icon}</div>
                            <div className="feature-content">
                                <h3>{point.title}</h3>
                                <p>{point.desc}</p>
                            </div>
                        </div>
                    ))}
                </section>
                
                
            </section>

            <section className="details">
                <h2>How it works?</h2>
                {working.map((steps,i) => (
                    <div className="working-timeline-cards " key={i}>
                        <div className='steps'>{steps.i}</div>
                        <h3>{steps.title}</h3>
                        <p>{steps.desc}</p>
                    </div>
                ))}
            </section>

            <section className="why-compare">
                <div className='header'>
                    <h3>Why Comparison matters?</h3>
                     <p>Returns tell only part of the story. Comparing risk, costs, and 
                    portfolio allocation together helps investors make smarter decisions.</p>
                </div>
                    <div className="comparision ">
                        <article className='fund-card'>
                            <h3>Fund A</h3>

                            <div className='stats'>
                                <div className='stat'>
                                <span className='label'>Return</span>
                                <span className='positive'>15%</span>
                                </div>

                                <div className='stat'>
                                    <span className='label'>Risk</span>
                                    <span className='high'>High</span>
                                </div>

                                <div className='stat'>
                                    <span className='label'>Expense</span>
                                    <span className='high'>1.2%</span>
                                </div>
                            </div>
                            
                        </article>
                        
                        <div className='VS'><h4>VS</h4></div>

                        <article className='fund-card'>
                            <h3>Fund B</h3>
                            <div className='stats'>

                                <div className='stat'>
                                    <span className='label'>Return</span>
                                    <span className='positive'>14%</span>
                                </div>
                                
                                <div className='stat'>
                                    <span className='label'>Risk</span>
                                    <span className='moderate'>Moderate</span>
                                </div>

                                
                                <div className='stat'>
                                    <span className='label'>Expense</span>
                                    <span className='low'>0.6%</span>
                                </div>
                            </div>
                            
                        </article>

                    </div>

                    <div className='why-compare-conclusion'>
                        <p>
                            Smart investing isn't about choosing the highest return.
                            It's about balancing returns, risk, costs, and diversification.
                        </p>
                    </div>
            </section>     

            <section className="popular-mFunds">
                <h2>Popular Mutual Funds</h2>
                <div className='fund-boxes'>
                    {popularFunds.map((fund,idx) =>(
                        <div className='fund-box' key={idx}>
                            <p className='category'>{fund.category}</p>
                            <h3>{fund.name}</h3>

                            <div className='fund-stats'>
                                <div className="detail">
                                    <span>1Y Return</span>
                                    <span className='positive'>{fund.oneYreturn}</span>
                                </div>

                                <div className="detail">
                                    <span>Risk</span>
                                    <span className={`${fund.risk.toLowerCase()}`}>{fund.risk}</span>
                                </div>

                                <div className="detail">
                                    <span>Expense Ratio</span>
                                    <span>{fund.expenseratio}</span>
                                </div>
                            </div>

                            <button onClick={() => navigate(`/fund/${fund.schemecode}`)}>View Details →</button>
                        </div>
                    ))}

                </div>
            </section>       
        </div>
    
    );
}

export default Home;