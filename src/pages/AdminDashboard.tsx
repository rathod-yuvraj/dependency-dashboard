import { useEffect, useState } from "react";
import { getAdminDashboard } from "../api/dashboardApi";
import LogoutButton from "../components/LogoutButton";

export default function AdminDashboard() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    getAdminDashboard().then(setData);
  }, []);

  if (!data) return <div className="p-10">Loading...</div>;

  const cards = [
    { title: "Companies", value: data.totalCompanies },
    { title: "Departments", value: data.totalDepartments },
    { title: "Projects", value: data.totalProjects },
    { title: "Users", value: data.totalUsers },
    { title: "Blocked Tasks", value: data.totalBlockedTasks },
  ];

  return (
    <div className="p-10">
      <div className="flex justify-between mb-6">
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        <LogoutButton />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {cards.map((c) => (
          <div key={c.title} className="bg-white p-6 rounded-xl shadow">
            <p className="text-gray-500">{c.title}</p>
            <h2 className="text-3xl font-bold">{c.value}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
