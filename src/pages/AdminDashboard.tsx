import DashboardLayout from "../layouts/DashboardLayout";
import { useEffect, useState } from "react";
import { getAdminDashboard } from "../api/dashboardApi";

export default function AdminDashboard() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    getAdminDashboard().then(setData);
  }, []);

  if (!data) return <DashboardLayout>Loading...</DashboardLayout>;

  const cards = [
    { title: "Companies", value: data.totalCompanies },
    { title: "Departments", value: data.totalDepartments },
    { title: "Projects", value: data.totalProjects },
    { title: "Users", value: data.totalUsers },
    { title: "Blocked Tasks", value: data.totalBlockedTasks },
  ];

  return (
    <DashboardLayout>
      <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {cards.map((c) => (
          <div key={c.title} className="bg-white p-6 rounded-xl shadow">
            <p className="text-gray-500">{c.title}</p>
            <h2 className="text-3xl font-bold">{c.value}</h2>
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
}
