import { Line } from "react-chartjs-2"
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement } from "chart.js"

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement)

export default function CostChart({ data }) {
  return <Line data={data} />
}
