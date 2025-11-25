import React from "react";
import NavBar from "../Components/NavBar";
import { Link } from "react-router";

const Login = () => {
  return (
    <div className="bg-[#F3F3F3] min-h-screen">
      <NavBar />

      <div className="flex items-center justify-center py-16">
        <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
          <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            className="input input-bordered w-full mb-4 bg-[#F3F3F3]"
            placeholder="Enter your email"
          />

          <label className="block text-sm font-medium mb-1">Password</label>
          <input
            type="password"
            className="input input-bordered w-full mb-4 bg-[#F3F3F3]"
            placeholder="Enter your password"
          />

          <button className="btn btn-neutral w-full mt-2 border-none">Login</button>

          <p className="text-center text-sm mt-4">
            Don't have an account?{" "}
            <Link to="/register" className="text-blue-600 hover:underline">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
