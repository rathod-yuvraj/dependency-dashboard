import { useEffect, useState } from "react";
import { getManagerDashboard } from "../api/dashboardApi";
import LogoutButton from "../components/LogoutButton";
import { PieChart, Pie, Cell, Tooltip } from "recharts";

export default function ManagerDashboard() {
  const [data, setData] = useState<any>(null);
const navigate = useNavigate();
  useEffect(() => {
    getManagerDashboard(1).then(setData); // projectId=1 demo
  }, []);

  if (!data) return <div className="p-10">Loading...</div>;

  const chartData = [
    { name: "Completed", value: data.completedTasks },
    { name: "Remaining", value: data.totalTasks - data.completedTasks },
  ];

  return (
    <DashboardLayout>
    <div className="p-10">
      <div className="flex justify-between mb-6">
        <h1 className="text-2xl font-bold">Manager Dashboard</h1>
        <LogoutButton />
      </div>
<button
  onClick={() => navigate("/graph")}
  className="mt-6 bg-indigo-600 text-white px-4 py-2 rounded"
>
  View Dependency Graph
</button>
      <h2 className="text-lg mb-4">
        Project Progress: {data.progressPercentage}%
      </h2>

      <PieChart width={300} height={300}>
        <Pie data={chartData} dataKey="value" outerRadius={100}>
          {chartData.map((_, i) => (
            <Cell key={i} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </div>
    </DashboardLayout>
  );
}
