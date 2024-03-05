"use client";
import React, { useState } from "react";

import { useRouter } from "next/navigation";
import { LoginResult } from "@/app/entites/LoginResult";
import APIauth, { FetchLoginResponse } from "@/app/services/auth-service";

const Login = () => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginSuccess, setloginSuccess] = useState(false);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    const apiAuth = new APIauth();
    e.preventDefault();
    const response: FetchLoginResponse<LoginResult> = await apiAuth.login(
      username,
      password
    );
    setloginSuccess(true);
    const token = response.result.token;
    const userId = response.result.user.id;
    const WishlistId = response.result.user.wishlistId;
    const tokenRole = apiAuth.extractRoleFromJwt(token);
    localStorage.setItem("token", JSON.stringify(token));
    localStorage.setItem("userId", JSON.stringify(userId));
    localStorage.setItem("wishlistId", JSON.stringify(WishlistId));
    if (tokenRole.role === "customer") {
      router.push("/");
    } else {
      console.log("nuk je admin");
    }
  };

  return (
    <section className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
      <div className="md:w-1/3 max-w-sm pt-10">
        <form onSubmit={handleSubmit}>
          <input
            className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="mt-4 flex justify-between font-semibold text-sm">
            <label className="flex text-slate-500 hover:text-slate-600 cursor-pointer">
              <input className="mr-1" type="checkbox" />
              <span>Remember Me</span>
            </label>
            <a
              className="text-blue-600 hover:text-blue-700 hover:underline hover:underline-offset-4"
              href="#"
            >
              Forgot Password?
            </a>
          </div>
          <div className="text-center md:text-left">
            <button
              className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider"
              type="submit"
            >
              Login
            </button>
          </div>
        </form>
        {loginSuccess && (
          <div className="text-center md:text-left mt-2 text-green-500">
            Login successful! Redirecting...
          </div>
        )}
        <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
          Don&apos;t have an account?{" "}
          <button
            className="text-red-600 hover:underline hover:underline-offset-4"
            onClick={() => router.push("/auth/Register")}
          >
            Register
          </button>
        </div>
      </div>
    </section>
  );
};

export default Login;
