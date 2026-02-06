import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";

export default function Login() {
  const navigate = useNavigate();

  const [emailOrUsername, setEmailOrUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await api.post("/auth/login", {
        emailOrUsername,
        password,
      });

      const { accessToken } = res.data;
      const role = JSON.parse(atob(accessToken.split(".")[1]))[
        "http://schemas.microsoft.com/ws/2008/06/identity/claims/role"
      ];

      localStorage.setItem("token", accessToken);
      localStorage.setItem("role", role);

      // Redirect by role
      if (role === "Admin") navigate("/admin");
      else if (role === "Manager") navigate("/manager");
      else navigate("/developer");

    } catch {
      setError("Invalid credentials");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded-xl shadow-md w-96"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">
          Dependency System Login
        </h2>

        {error && <p className="text-red-500 mb-4">{error}</p>}

        <input
          type="text"
          placeholder="Email or Username"
          className="w-full p-2 border rounded mb-4"
          value={emailOrUsername}
          onChange={(e) => setEmailOrUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 border rounded mb-4"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Login
        </button>
      </form>
    </div>
  );
}
