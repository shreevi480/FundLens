import { LineChart, Line, ResponsiveContainer } from 'recharts';
import './FundSummaryCard.css';
import { calculateReturn, getExpenseRatio, getRiskLevel, formatNav, formatCategory } from '../../utils/formatters'


function FundSummaryCard({ fund, index, mockFundData, navigate }) {


    // Step 2 - use it
    const returns = calculateReturn(fund.data)
    const isPositive = returns !== "N/A" && parseFloat(returns) > 0
    const expenseRatio = getExpenseRatio(fund.meta.scheme_category)
    const riskLevel = getRiskLevel(fund.meta.scheme_category)


    // Step 3 - process recent data for mini chart
    const recentData = fund.data
        .slice(0,30).reverse()
        .map(item => ({
            nav: parseFloat(item.nav)
        }))

    // Step 4 - return JSX
    return (
        <div className="summary-card">

            {/* Fund Name */}
            <h3>{fund.meta.scheme_name}</h3>

            {/* Category */}
            <p className='category'>{formatCategory(fund.meta.scheme_category)}</p>


            {/* Return */}
            <div className="return-section">
                <span>1Y Return</span>
                <h2 className={isPositive ? "positive" : "negative"}>
                    {returns === "N/A" ? "N/A" : `${isPositive ? "+" : ""}${returns}%`}
                </h2>
            </div>

            {/* Quick Stats */}
            <div className="stats">
                <div >
                    <span>Expense Ratio</span>
                    <p>{expenseRatio}</p>
                </div>

                <div>
                    <span>Fund House</span>
                    <p>{fund.meta.fund_house}</p>
                </div>
                <div>
                    <span>Risk</span>
                    <p>{riskLevel}</p>
                </div>

            </div>

            

            {/* View Details Button */}
            <button
                onClick={() =>
                    navigate(`/fund/${fund.meta.scheme_code}`)
                }
            >
                View Details →
            </button>

        </div>
    )
}

export default FundSummaryCard