import "./chart.css"
import { Line } from "react-chartjs-2"
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Tooltip } from "chart.js"
import { chartData } from "../../../data/chart-data"

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
)

const options = {
  responsive: true,
  plugins: {
    tooltip: {
      position: 'nearest',
      displayColors: false
    }
  },
  scales: {
    x: {
      grid: {
        display: false,
        drawBorder: false
      },
      ticks: {
        padding: 40
      }
    },
    y: {
      display: true,
      suggestedMin: 0,
      suggestedMax: 10000,
      grid: {
        display: false,
        drawBorder: false
      },
      ticks: {
        stepSize: 2000,
        padding: 40
      }
    }
  },
  layout: {
    padding: {
      left: -30
    }
  },
  elements: {
    point: {
      radius: 10,
      hoverRadius: 6,
      pointBorderColor: 'transparent',
      pointBackgroundColor: 'transparent',
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
    backgroundColor: 'rgba(43, 185, 45, 0.5)',
    hoverBackgroundColor: 'rgb(43, 185, 46)',
    hoverBorderColor: '#FFF',
  }, {
    label: 'Expenses',
    data: chartData.map(data => data.Expenses),
    cubicInterpolationMode: 'monotone',
    borderColor: 'rgb(200, 238, 68)',
    backgroundColor: 'rgba(200, 238, 68, 0.5)',
    hoverBackgroundColor: 'rgb(200, 238, 68)',
    hoverBorderColor: '#FFF',
  }]
}


export default function ChartLayout() {
  return (
    <div className="chart--wrapper">
      <Line options={options} data={data}/>
    </div>
  )
} 