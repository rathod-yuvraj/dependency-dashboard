import type { ReactNode } from "react";
import Sidebar from "../components/Sidebar";
import LogoutButton from "./LogoutButton";

interface Props {
  children: ReactNode;
}

export default function DashboardLayout({ children }: Props) {
  return (
    <div className="flex h-screen">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <header className="flex justify-end p-4 bg-white shadow">
          <LogoutButton />
        </header>

        <main className="flex-1 p-6 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}
