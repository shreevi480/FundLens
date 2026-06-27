import { 
    LineChart, Line, XAxis, YAxis,
    CartesianGrid, Tooltip, Legend, 
    ResponsiveContainer 
} from 'recharts';
import './ReturnsLineChart.css';

const FUND_COLORS = ["#3b82f6", "#10b981", "#f59e0b"]

function ReturnsLineChart({ fundDetails }) {

    const buildChartData = () => {
        if (!fundDetails || fundDetails.length === 0) return []

        const monthlyPoints = 12
        const chartData = []

        for (let i = monthlyPoints - 1; i >= 0; i--) {
            const dataIndex = i * 30

            const point = {
                date: fundDetails[0].data[dataIndex]?.date || ""
            }

            fundDetails.forEach((fund, fundIndex) => {
                const baseNav = parseFloat(
                    fund.data[monthlyPoints * 30]?.nav 
                    || fund.data[fund.data.length - 1].nav
                )
                const currentNav = parseFloat(
                    fund.data[dataIndex]?.nav || 0
                )
                const returnPct = (
                    (currentNav - baseNav) / baseNav * 100
                ).toFixed(2)

                point[`fund${fundIndex}`] = parseFloat(returnPct)
            })

            chartData.push(point)
        }

        return chartData
    }

    const chartData = buildChartData()

    return (
        <div className="chart-container">
            <h3 className="chart-title">Returns Over Time</h3>
            <p className="chart-subtitle">
                Normalized % return from 1 year ago
            </p>
            <ResponsiveContainer width="100%" height={400}>
                <LineChart data={chartData}>
                    
                    <CartesianGrid 
                        strokeDasharray="3 3" 
                        stroke="rgba(255,255,255,0.1)"
                    />

                    <XAxis 
                        dataKey="date"
                        tick={{ fill: '#94a3b8', fontSize: 11 }}
                        axisLine={{ stroke: '#1e2d45' }}
                    />

                    <YAxis
                        tick={{ fill: '#94a3b8', fontSize: 11 }}
                        axisLine={{ stroke: '#1e2d45' }}
                        tickFormatter={(value) => `${value}%`}
                        label={{
                            value: "Return %",
                            angle: -90,
                            position: "insideLeft",
                            fill: '#94a3b8',
                            fontSize: 12
                        }}
                    />

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
                            color: '#94a3b8',
                            fontSize: '12px'
                        }}
                    />

                    {fundDetails.map((fund, index) => (
                        <Line
                            key={index}
                            type="monotone"
                            dataKey={`fund${index}`}
                            name={fund.meta.scheme_name}
                            stroke={FUND_COLORS[index]}
                            strokeWidth={3}
                            dot={false}
                            activeDot={{ r: 6 }}
                        />
                    ))}

                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default ReturnsLineChart;