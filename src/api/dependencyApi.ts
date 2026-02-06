import api from "./axios";
// import { DependencyGraphResponse } from "../types/dependencyGraph";

export const getProjectDependencyGraph = async (projectId: number) => {
  const res = await api.get(`/dependency/project/${projectId}/graph`);
  return res.data;
};


// export const getDependencyGraph = async (projectId: number) => {
//   const res = await api.get<DependencyGraphResponse>(
//     `/dependencies/graph/${projectId}`
//   );
//   return res.data;
// };