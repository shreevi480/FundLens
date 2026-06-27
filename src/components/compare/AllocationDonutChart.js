import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './AllocationDonutChart.css';

const COLORS = ["#3b82f6", "#10b981", "#f59e0b", "#ef4444", "#8b5cf6"];


// Realistic mock allocations based on fund category
const getMockAllocation = (category = "") => {
    const cat = category.toLowerCase()

    if (cat.includes("large cap"))
        return [
            { name: "Large Cap Equity", value: 80 },
            { name: "Mid Cap Equity", value: 10 },
            { name: "Debt", value: 5 },
            { name: "Cash", value: 5 },
        ]
    if (cat.includes("mid cap"))
        return [
            { name: "Mid Cap Equity", value: 65 },
            { name: "Large Cap Equity", value: 20 },
            { name: "Small Cap Equity", value: 10 },
            { name: "Cash", value: 5 },
        ]
    if (cat.includes("small cap"))
        return [
            { name: "Small Cap Equity", value: 70 },
            { name: "Mid Cap Equity", value: 20 },
            { name: "Cash", value: 10 },
        ]
    if (cat.includes("flexi") || cat.includes("multi"))
        return [
            { name: "Large Cap Equity", value: 40 },
            { name: "Mid Cap Equity", value: 30 },
            { name: "Small Cap Equity", value: 20 },
            { name: "Cash", value: 10 },
        ]
    if (cat.includes("debt") || cat.includes("bond"))
        return [
            { name: "Government Bonds", value: 50 },
            { name: "Corporate Bonds", value: 35 },
            { name: "Cash", value: 15 },
        ]
    // default
    return [
        { name: "Equity", value: 60 },
        { name: "Debt", value: 25 },
        { name: "Cash", value: 15 },
    ]
}

// Custom label showing percentage
const renderCustomLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
    const RADIAN = Math.PI / 180
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5
    const x = cx + radius * Math.cos(-midAngle * RADIAN)
    const y = cy + radius * Math.sin(-midAngle * RADIAN)

    return percent > 0.08 ? (
        <text x={x} y={y} fill="white" textAnchor="middle" dominantBaseline="central" fontSize={12}>
            {`${(percent * 100).toFixed(0)}%`}
        </text>
    ) : null
}

function AllocationDonut({ fundDetails }) {
    return (
        <div className="allocation-section">
            <h3 className="chart-title">Asset Allocation</h3>
            <p className="chart-subtitle">
                Portfolio composition by asset class
            </p>

            <div className="donut-charts-row">
                {fundDetails.map((fund, index) => {
                    const allocation = getMockAllocation(fund.meta.scheme_category)

                    return (
                        <div className="donut-wrapper" key={index}>
                            <h4 className="donut-fund-name">
                                {fund.meta.scheme_name.length > 30
                                    ? fund.meta.scheme_name.substring(0, 30) + "..."
                                    : fund.meta.scheme_name}
                            </h4>

                            <ResponsiveContainer width="100%" height={250}>
                                <PieChart>
                                    <Pie
                                        data={allocation}
                                        cx="50%"
                                        cy="50%"
                                        innerRadius={60}
                                        outerRadius={90}
                                        paddingAngle={3}
                                        dataKey="value"
                                        labelLine={false}
                                        label={renderCustomLabel}
                                    >
                                        {allocation.map((entry, i) => (
                                            <Cell
                                                key={i}
                                                fill={COLORS[i % COLORS.length]}
                                            />
                                        ))}
                                    </Pie>

                                    <Tooltip
                                        contentStyle={{
                                            background: '#1a2235',
                                            border: '1px solid #1e2d45',
                                            borderRadius: '8px',
                                            color: '#f1f5f9'
                                        }}
                                        formatter={(value) => [`${value}%`, '']}
                                    />

                                    <Legend
                                        wrapperStyle={{
                                            fontSize: '12px',
                                            color: '#94a3b8'
                                        }}
                                    />
                                </PieChart>
                            </ResponsiveContainer>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default AllocationDonut;