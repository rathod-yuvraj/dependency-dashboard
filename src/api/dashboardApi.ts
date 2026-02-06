import api from "./axios";

export const getAdminDashboard = async () => {
  const res = await api.get("/dashboard/admin");
  return res.data;
};

export const getManagerDashboard = async (projectId: number) => {
  const res = await api.get(`/dashboard/manager/project/${projectId}`);
  return res.data;
};

export const getDeveloperDashboard = async () => {
  const res = await api.get("/dashboard/developer");
  return res.data;
};
