import axios from "axios";

export interface FetchResponse<T> {
  statusCode: number;
  isSuccess: boolean;
  errorMessages: string[];
  result: T[];
}
export interface DeleteResponse {
  statusCode: number;
  isSuccess: boolean;
  errorMessages: string[];
  result: null;
}
// const axiosInstance = axios.create({
//   baseURL: "http://localhost:5049/api",
// });
const baseURL = "http://localhost:5049/api";
class APIServer {
  getAll = async (endpoint: string) => {
    try {
      const res = await fetch(baseURL + "/" + endpoint, {
        cache: "no-store",
      });
      return await res.json();
    } catch (error) {
      console.error("error in fetching api", error);
    }
  };
  //   delete = (id: number | string) => {
  //     return axiosInstance
  //       .delete<DeleteResponse>(this.endpoint + "/" + id)
  //       .then((res) => res.data);
  //   };

  //   create = (data: T) => {
  //     return axiosInstance
  //       .post<FetchResponse<T>>(this.endpoint, data)
  //       .then((res) => res.data);
  //   };
  //   edit = (id: number | string, updatedData: T) => {
  //     return axiosInstance.put<DeleteResponse>(
  //       this.endpoint + "/" + id,
  //       updatedData
  //     );
  //   };
}
export default APIServer;
