import axios from "axios";
import { LoginResult } from "../entites/LoginResult";
import { CreateUser } from "../entites/CreateUser";
export interface FetchLoginResponse<T> {
  statusCode: number;
  isSuccess: boolean;
  errorMessages: string[];
  result: LoginResult;
}
export interface RegisterResponse {
  statusCode: number;
  isSuccess: boolean;
  errorMessages: string[];
  result: CreateUser;
}
const axiosInstance = axios.create({
  baseURL: "http://localhost:5049/api",
});
const baseURL = "http://localhost:5049/api";
class APIauth {
  login = async (username: string, password: string) => {
    try {
      const response = await axiosInstance.post("/User/Login", {
        username,
        password,
      });

      return response.data;
    } catch (error) {
      throw new Error("Authentication failed");
    }
  };

  register = async (data: CreateUser) => {
    const response = await fetch(baseURL + "/User/Register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return await response.json();
  };
  extractRoleFromJwt = (token: string) => {
    try {
      const base64Url = token.split(".")[1];
      const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
      const jsonPayload = decodeURIComponent(
        atob(base64)
          .split("")
          .map(function (c) {
            return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
          })
          .join("")
      );

      return JSON.parse(jsonPayload);
    } catch (error) {
      console.error("Error decoding token:", error);
      return null;
    }
  };
}
export default APIauth;
