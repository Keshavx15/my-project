import React from "react"
import CostChart from "./components/CostChart"

export default function App() {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "AWS Monthly Cost ($)",
        data: [300, 450, 400, 600, 500],
        borderColor: "rgb(75, 192, 192)",
        fill: false,
      },
    ],
  }

  return (
    <div style={{ width: "600px", margin: "50px auto" }}>
      <h2>AWS Cost Dashboard</h2>
      <CostChart data={data} />
    </div>
  )
}
