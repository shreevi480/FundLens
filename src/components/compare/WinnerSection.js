import { calculateReturn, getExpenseRatio, getRiskLevel } from '../../utils/formatters'
import './WinnerSection.css';

function WinnerSection({ fundDetails }) {

    const getWinners = () => {

        if (!fundDetails || fundDetails.length === 0) {
            return [];
        }

        const fundMetrics = fundDetails.map(fund => ({
            name: fund.meta.scheme_name,
            return: parseFloat(calculateReturn(fund.data)),
            expense: parseFloat(getExpenseRatio(fund.meta.scheme_category)),
            risk: getRiskLevel(fund.meta.scheme_category)
        }));

        const highestReturn = [...fundMetrics].sort(
            (a, b) => b.return - a.return
        )[0];

        const lowestExpense = [...fundMetrics].sort(
            (a, b) => a.expense - b.expense
        )[0];

        const riskPriority = {
            "Low": 1,
            "Moderate": 2,
            "Moderate-High": 3,
            "High": 4

        };

        const lowestRisk = [...fundMetrics].sort(
            (a, b) => riskPriority[a.risk] - riskPriority[b.risk]
        )[0];

        return [
            {
                title: "Highest Return",
                icon: "🏆",
                fund: highestReturn.name,
                value: `${highestReturn.return.toFixed(2)}%`,
                color: "gold"
            },
            {
                title: "Lowest Expense",
                icon: "💰",
                fund: lowestExpense.name,
                value: `${lowestExpense.expense}%`,
                color: "blue"  
            },
            {
                title: "Lowest Risk",
                icon: "🛡️",
                fund: lowestRisk.name,
                value: lowestRisk.risk,
                color: "green"
            }
        ];
    };

    const winners = getWinners();

    return (
        <section className="winner-section">

            <div className="winner-header">
                <h3>Category Winners</h3>
                <p>Best fund in each category</p>
            </div>

            <div className="winners-row">

                {winners.map((winner, index) => (
                    <div key={index} className={`winner-card ${winner.color}`}>
                        <span className="winner-icon">{winner.icon}</span>
                        <h4>{winner.title}</h4>
                        <p className="winner-fund">{winner.fund}</p>
                        <span className="winner-value">{winner.value}</span>
                        
                    </div>
                ))}

            </div>

        </section>
    );
}

export default WinnerSection;