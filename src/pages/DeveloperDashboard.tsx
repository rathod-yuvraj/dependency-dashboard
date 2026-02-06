import { useEffect, useState } from "react";
import { getDeveloperDashboard } from "../api/dashboardApi";
import LogoutButton from "../components/LogoutButton";

export default function DeveloperDashboard() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    getDeveloperDashboard().then(setData);
  }, []);

  if (!data) return <div className="p-10">Loading...</div>;

  return (
    <div className="p-10">
      <div className="flex justify-between mb-6">
        <h1 className="text-2xl font-bold">Developer Dashboard</h1>
        <LogoutButton />
      </div>

      <div className="grid grid-cols-2 gap-6">
        <Card title="Assigned Tasks" value={data.totalAssignedTasks} />
        <Card title="Completed" value={data.completedTasks} />
        <Card title="Pending" value={data.pendingTasks} />
        <Card title="Blocked" value={data.blockedTasks} />
      </div>
    </div>
  );
}

function Card({ title, value }: any) {
  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <p className="text-gray-500">{title}</p>
      <h2 className="text-3xl font-bold">{value}</h2>
    </div>
  );
}
