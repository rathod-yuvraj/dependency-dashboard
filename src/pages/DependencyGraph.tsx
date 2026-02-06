
import { useEffect, useState } from "react";
import ReactFlow, {
  Background,
  Controls,
   MiniMap,
  Node,
  Edge,
} from "reactflow";
import "reactflow/dist/style.css";
import { getProjectDependencyGraph } from "../api/dependencyApi";
import LogoutButton from "../layouts/LogoutButton";
import DashboardLayout from "../layouts/DashboardLayout";
export default function DependencyGraph() {
  const [nodes, setNodes] = useState<Node[]>([]);
  const [edges, setEdges] = useState<Edge[]>([]);

  useEffect(() => {
    loadGraph();
  }, []);

  const loadGraph = async () => {
    const data = await getProjectDependencyGraph(1); // demo projectId

    const graphNodes: Node[] = data.nodes.map((n: any, index: number) => ({
      id: n.id,
      data: { label: `${n.label} (${n.status})` },
      position: { x: (index % 4) * 200, y: Math.floor(index / 4) * 120 },
      style: {
        padding: 10,
        borderRadius: 8,
        border: "1px solid #333",
        background: n.type === "Module" ? "#DBEAFE" : "#DCFCE7",
      },
    }));
     const mappedNodes: Node[] = data.nodes.map((n, index) => ({
      id: n.id,
      data: { label: n.label },
      position: { x: index * 150, y: index * 80 },
      style: {
        background:
          n.status === "Completed"
            ? "#22c55e"
            : n.status === "InProgress"
            ? "#f59e0b"
            : "#ef4444",
        color: "white",
        borderRadius: 8,
        padding: 10,
      },
    }));
const mappedEdges: Edge[] = data.edges.map((e) => ({
      id: `${e.source}-${e.target}`,
      source: e.source,
      target: e.target,
      animated: true,
    }));
    const graphEdges: Edge[] = data.edges.map((e: any, i: number) => ({
      id: `e${i}`,
      source: e.source,
      target: e.target,
      label: e.relation,
      animated: e.relation === "depends_on",
    }));

    setNodes(graphNodes);
    setEdges(graphEdges);
  };

  return (
    <DashboardLayout>
    <div className="h-screen flex flex-col">
      <div className="flex justify-between p-4 bg-white shadow">
        <h1 className="text-xl font-bold">Project Dependency Graph</h1>
        <LogoutButton />
      </div>

      <div className="flex-1">
        <ReactFlow nodes={nodes} edges={edges} fitView>
           <MiniMap />
          <Background />
          <Controls />
        </ReactFlow>
      </div>
    </div>
    </DashboardLayout>
  );
}
