import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const role = localStorage.getItem("role");

  const menu = {
    Admin: [
      { name: "Dashboard", path: "/admin" },
      { name: "Dependency Graph", path: "/graph" },
    ],
    Manager: [
      { name: "Dashboard", path: "/manager" },
      { name: "Dependency Graph", path: "/graph" },
    ],
    Developer: [
      { name: "Dashboard", path: "/developer" },
    ],
   
  };

  return (
    <aside className="w-64 bg-indigo-700 text-white flex flex-col">
      <h2 className="text-2xl font-bold p-6 border-b border-indigo-500">
        Dependency System
      </h2>

      <nav className="flex-1 p-4 space-y-2">
        {menu[role as keyof typeof menu]?.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `block px-4 py-2 rounded ${
                isActive ? "bg-indigo-500" : "hover:bg-indigo-600"
              }`
            }
          >
            {item.name}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
