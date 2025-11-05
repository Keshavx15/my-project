import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, PointElement, CategoryScale, LinearScale } from "chart.js";

ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale);

export default function CostChart({ data }) {
  const chartData = {
    labels: data.map(x => new Date(x.date).toLocaleDateString()),
    datasets: [
      {
        label: "AWS Cost (₹)",
        data: data.map(x => x.amount),
        borderWidth: 2
      }
    ]
  };

  const options = {
    responsive: true
  };

  return (
    <div style={{ width: "80%", margin: "auto" }}>
      <Line data={chartData} options={options} />
    </div>
  );
}