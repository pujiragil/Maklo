import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import styled from "styled-components"
import { chartData } from "../../../data/chart-data"

const ChartWrapper = styled.div`
  margin-right: 40px;
`

const ChartLayout = () => {
  return (
    <ChartWrapper>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={chartData}>
          <Line strokeWidth={2} dot={false} type="monotone" dataKey="Income" stroke="#29A073" />
          <Line strokeWidth={2} dot={false} type="monotone" dataKey="Expenses" stroke="#C8EE44" />
          <XAxis padding={{ left: 26, right: 26 }} interval={0} dataKey="name" axisLine={false} tickLine={false} />
          <YAxis padding={{ top: 26, bottom: 26 }} axisLine={false} tickLine={false} />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    </ChartWrapper>
  )
}

export default ChartLayout