import axios from "axios";
import { useEffect, useState } from "react";
import CostChart from "../components/CostChart";

export default function Dashboard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/costs").then(res => setData(res.data));
  }, []);

  return (
    <div>
      <h2>AWS Cost Dashboard</h2>
      <CostChart data={data} />
    </div>
  );
}