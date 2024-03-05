import { assert } from "console";

export interface FetchResponse<T> {
  statusCode: number;
  isSuccess: boolean;
  errorMessages: string[];
  total: number;
  result: T[];
}
export interface FetchResponseById<T> {
  statusCode: number;
  isSuccess: boolean;
  errorMessages: string[];
  result: T;
}
export interface DeleteResponse {
  statusCode: number;
  isSuccess: boolean;
  errorMessages: string[];
  result: null;
}

const baseURL = "http://localhost:5049/api";
class APIServer {
  getAll = async (endpoint: string, search?: string) => {
    try {
      let url = baseURL + "/" + endpoint;

      if (search) {
        url += `?search=${encodeURIComponent(search)}`;
      }

      const res = await fetch(url, {
        cache: "no-store",
      });

      return await res.json();
    } catch (error) {
      console.error("Error in fetching API:", error);
    }
  };
  getAllProducts = async (
    endpoint: string,
    pageSize: number,
    pageNumber: number,
    orderBy: string
  ) => {
    try {
      const url = new URL(`${baseURL}/${endpoint}`);
      url.searchParams.append("pageSize", pageSize.toString());
      url.searchParams.append("pageNumber", pageNumber.toString());
      url.searchParams.append("orderBy", orderBy);

      const res = await fetch(url.toString(), {
        cache: "no-store",
      });

      return await res.json();
    } catch (error) {
      console.error("error in fetching api", error);
    }
  };
  get = async (endpoint: string, id: number | string) => {
    try {
      const res = await fetch(baseURL + "/" + endpoint + "/" + id, {
        cache: "no-store",
      });
      return await res.json();
    } catch (error) {
      console.error("error in fetching api", error);
    }
  };
}
export default APIServer;
