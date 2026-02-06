import api from "./axios";

export const getProjectDependencyGraph = async (projectId: number) => {
  const res = await api.get(`/dependency/project/${projectId}/graph`);
  return res.data;
};
