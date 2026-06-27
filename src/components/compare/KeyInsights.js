import { calculateReturn, getExpenseRatio, getRiskLevel } from '../../utils/formatters';
import './KeyInsights.css';

function KeyInsights({ fundDetails }) {

    const generateInsights = () => {

        const insights = [];

        if (!fundDetails || fundDetails.length === 0) {
            return insights;
        }

        // Step 1 - calculate metrics for all funds
        const fundMetrics = fundDetails.map(fund => ({
            name: fund.meta.scheme_name,
            return: parseFloat(calculateReturn(fund.data)),
            expense: parseFloat(getExpenseRatio(fund.meta.scheme_category)),
            risk: getRiskLevel(fund.meta.scheme_category)
        }));

        // Step 2 - highest return
        const highestReturnFund = [...fundMetrics].sort(
            (a, b) => b.return - a.return
        )[0];

        // Step 3 - lowest expense
        const lowestExpenseFund = [...fundMetrics].sort(
            (a, b) => a.expense - b.expense
        )[0];

        // Step 4 - lowest risk
        const riskPriority = {
            "Low": 1,
            "Moderate": 2,
            "Moderate-High": 3,
            "High": 3
        };

        const lowestRiskFund = [...fundMetrics].sort(
            (a, b) =>
                riskPriority[a.risk] - riskPriority[b.risk]
        )[0];

        // Step 5 - push insights

        insights.push({
            text: `${highestReturnFund.name} delivered the highest return of ${highestReturnFund.return.toFixed(2)}%`,
            type: "positive"    // green
        })

        insights.push({
            text: `${lowestExpenseFund.name} has the lowest expense ratio`,
            type: "neutral"     // blue
        })

        insights.push({
            text: `${lowestRiskFund.name} carries the lowest risk profile`,
            type: "positive"    // green
        })


        // Insight 4 - highest risk warning
        const highestRiskFund = [...fundMetrics].sort(
            (a, b) => riskPriority[b.risk] - riskPriority[a.risk]
        )[0]

        insights.push({
            text: `${highestRiskFund.name} carries the highest risk — suitable for aggressive investors only`,
            type: "warning"
        })

        // Insight 5 - return vs risk observation
        const bestReturnFund = fundMetrics[0]
        const worstReturnFund = [...fundMetrics].sort(
            (a, b) => a.return - b.return
        )[0]

        const returnDiff = (bestReturnFund.return - worstReturnFund.return).toFixed(2)

        insights.push({
            text: `Return spread between best and worst performing fund is ${returnDiff}%`,
            type: "neutral"
        })

        return insights;
    };

    const insights = generateInsights();

    return (
        <div className="key-insights">

            <h3>Key Insights</h3>
            <p>What the data tells you</p>

            <div className="insights-list">

                {insights.map((insight, index) => (
                    <div key={index} className={`insight-card ${insight.type}`}>
                        <span className="insight-icon">
                            {insight.type === "positive" ? "💡" : 
                            insight.type === "warning" ? "⚠️" : "ℹ️"}
                        </span>
                        <p>{insight.text}</p>
                    </div>
                ))}


            </div>

        </div>
    );
}

export default KeyInsights;