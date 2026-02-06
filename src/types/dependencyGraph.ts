export interface GraphNodeDto {
  id: string;
  label: string;
  status: string;
  type: "module" | "task";
}

export interface GraphEdgeDto {
  source: string;
  target: string;
}

export interface DependencyGraphResponse {
  nodes: GraphNodeDto[];
  edges: GraphEdgeDto[];
}
