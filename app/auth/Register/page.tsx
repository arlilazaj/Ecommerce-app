"use client";
import APIauth, { RegisterResponse } from "@/app/services/auth-service";
import { zodResolver } from "@hookform/resolvers/zod/dist/zod.js";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { json } from "stream/consumers";
import { z } from "zod";
const schema = z.object({
  name: z
    .string()
    .min(3, { message: "The name should be at least 3 characters " })
    .max(20),
  username: z
    .string()
    .min(3, { message: "The name should be at least 3 characters " })
    .max(20),
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" })
    .regex(/[a-z]/, {
      message: "Password must contain at least one lowercase letter",
    })
    .regex(/[A-Z]/, {
      message: "Password must contain at least one uppercase letter",
    })
    .regex(/[0-9]/, { message: "Password must contain at least one number" })
    .regex(/[^a-zA-Z0-9]/, {
      message: "Password must contain at least one non-letter character",
    }),
});
type UserFormData = z.infer<typeof schema>;
const Register = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserFormData>({
    resolver: zodResolver(schema),
  });
  const onSubmit = async (data: UserFormData) => {
    try {
      const apiAuth = new APIauth();

      const response: RegisterResponse = await apiAuth.register(data);
      if (response.isSuccess) {
        toast.success("Jeni regjistruar me sukses");
        setTimeout(() => {
          router.push("/");
        }, 1000);
      } else {
        response.errorMessages.forEach((errorMessage) => {
          toast.error(errorMessage);
        });
      }
    } catch (error) {
      console.error("error", error);
    }
  };
  return (
    <>
      <div>
        <Toaster />
      </div>
      <section className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
        <div className="md:w-1/3 max-w-sm pt-10">
          <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-600 mb-1"
              >
                Name:
              </label>
              <input
                {...register("name")}
                type="text"
                id="name"
                className="form-input border-2 hover:border-blue-500 rounded-md py-2 px-4 w-full focus:outline-none focus:border-blue-700"
              />
              {errors.name && (
                <p className="text-red-500">{errors.name.message}</p>
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-600 mb-1"
              >
                Username:
              </label>
              <input
                {...register("username")}
                type="text"
                id="username"
                className="form-input border-2 hover:border-blue-500 rounded-md py-2 px-4 w-full focus:outline-none focus:border-blue-700"
              />
              {errors.username && (
                <p className="text-red-500">{errors.username.message}</p>
              )}
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-600 mb-1"
              >
                Email:
              </label>
              <input
                {...register("email")}
                type="text"
                id="email"
                className="form-input border-2 hover:border-blue-500 rounded-md py-2 px-4 w-full focus:outline-none focus:border-blue-700"
              />
              {errors.email && (
                <p className="text-red-500">{errors.email.message}</p>
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-600 mb-1"
              >
                Password:
              </label>
              <input
                {...register("password")}
                type="password"
                id="password"
                className="form-input border-2 hover:border-blue-500 rounded-md py-2 px-4 w-full focus:outline-none focus:border-blue-700"
              />
              {errors.password && (
                <p className="text-red-500">{errors.password.message}</p>
              )}
            </div>
            <div className="flex justify-end">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
                Register
              </button>
            </div>
          </form>
          {/* {loginSuccess && (
          <div className="text-center md:text-left mt-2 text-green-500">
            Login successful! Redirecting...
          </div>
        )} */}
          <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
            have an account?{" "}
            <button onClick={() => router.push("/auth/Login")}>Login</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
