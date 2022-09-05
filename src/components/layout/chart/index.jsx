import "./chart.css"
import { Line } from "react-chartjs-2"
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Tooltip } from "chart.js"
import { chartData } from "../../../data/chart-data"
import { RiArrowDropDownLine } from 'react-icons/ri'
import styled from "styled-components"
import { useThemeContext } from "../../../context/theme-context"

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
      displayColors: false,
      backgroundColor: '#F3F6F8',
      titleColor: '#1B212D',
      bodyColor: '#1B212D',
      callbacks: {
        label: function (context) {
          return `${context.dataset.label}: ` + `$ ${context.formattedValue}`
        }
      }
    }
  },
  scales: {
    x: {
      grid: {
        display: false,
        drawBorder: false
      },
      ticks: {
        padding: 40,
        color: '#929EAE',
        font: {
          size: 12,
          weight: 400
        }
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
        padding: 40,
        color: '#929EAE',
        font: {
          size: 12,
          weight: 400
        },
        callback: function (value) {
          var ranges = [
            { divider: 1e6, suffix: 'M' },
            { divider: 1e3, suffix: 'k' }
          ];
          function formatNumber(n) {
            for (var i = 0; i < ranges.length; i++) {
              if (n >= ranges[i].divider) {
                return (n / ranges[i].divider).toString() + ranges[i].suffix;
              }
            }
            return n;
          }
          return formatNumber(value);
        }
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
      radius: 12,
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
    borderColor: '#29A073',
    backgroundColor: '#29A073',
    hoverBackgroundColor: '#29A073',
    hoverBorderColor: '#FFF',
  }, {
    label: 'Expenses',
    data: chartData.map(data => data.Expenses),
    cubicInterpolationMode: 'monotone',
    borderColor: '#C8EE44',
    backgroundColor: '#C8EE44',
    hoverBackgroundColor: '#C8EE44',
    hoverBorderColor: '#FFF',
  }]
}

const ChartTitleWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const ChartTitle = styled.h1`
  flex: 1;
  font-size: 18px;
  font-weight: 600;
  color: '#1B212D';
`

const LegendContent = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const LegendWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 20px;
`

const Legend = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 10px;
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme === "light" ? "#1B212D" : "#FFF"};
`

const Rounded = styled.span`
  width: 8px;
  height: 8px;
  border-radius: 100%;
  background: ${props => props.background};
`

const FilterLabel = styled.div`
  background: ${({ theme }) => theme === "light" ? "#F8F8F8" : "#282541"};
  cursor: pointer;
  padding: 8px 10px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Label = styled.p`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme === "light" ? "#1B212D" : "#FFF"};
`

export default function ChartLayout() {
  const {theme} = useThemeContext()
  return (
    <div className={`chart--wrapper ${theme}`}>
      <ChartTitleWrapper>
        <ChartTitle>Working Capital</ChartTitle>
        <LegendContent>
          <LegendWrapper>
            <Legend theme={theme}><Rounded background="#29A073" />Income</Legend>
            <Legend theme={theme}><Rounded background="#C8EE44" />Expenses</Legend>
          </LegendWrapper>
          <FilterLabel theme={theme}>
            <Label theme={theme}>Last 7 days</Label>
            <RiArrowDropDownLine/>
          </FilterLabel>
        </LegendContent>
      </ChartTitleWrapper>
      <Line options={options} data={data} />
    </div>
  )
} 