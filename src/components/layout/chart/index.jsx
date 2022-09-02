import { Line } from "react-chartjs-2"
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js"
import { chartData } from "../../../data/chart-data"

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top'
    },
    title: {
      display: true,
      text: 'title chart'
    }
  }
}

const labels = chartData.map(data => data.name)

const data = {
  labels,
  datasets: [{
    label: 'Income',
    data: chartData.map(data => data.Income),
    cubicInterpolationMode: 'monotone',
    borderColor: 'rgb(43, 185, 46)',
    backgroundColor: 'rgba(43, 185, 45, 0.5)'
  }, {
    label: 'Expenses',
    data: chartData.map(data => data.Expenses),
    cubicInterpolationMode: 'monotone',
    borderColor: 'rgb(200, 238, 68)',
    backgroundColor: 'rgba(200, 238, 68, 0.5)'
  }]
}


export default function ChartLayout() {
  return (
    <div>
      <Line options={options} data={data}/>
    </div>
  )
} 