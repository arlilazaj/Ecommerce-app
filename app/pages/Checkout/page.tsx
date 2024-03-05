import { getProducts } from "@/app/page";
import Link from "next/link";
import React from "react";
import { FaStar } from "react-icons/fa6";
import { IoIosGift } from "react-icons/io";
import OrderTable from "./OrderTable";
import PlaceOrder from "./PlaceOrder";
import { Toaster } from "react-hot-toast";
const Checkout = async () => {
  const getAllProducts = await getProducts();
  return (
    <>
      <div>
        <Toaster />
      </div>
      <div className="mt-10 w-full flex items-center justify-center my-10">
        <div className="w-[70%] flex flex-col">
          <h1>Home {">"} Checkout</h1>
          <div className="flex flex-col">
            <div className="flex p-3 space-x-2 items-center bg-slate-100">
              <IoIosGift style={{ color: "orange" }} />
              <p>
                Returning customer?{" "}
                <Link href={"/auth/Login"}>Click to login</Link>{" "}
              </p>
            </div>
            <div className="flex p-3 space-x-2 items-center bg-slate-100 mt-3">
              <IoIosGift style={{ color: "orange" }} />
              <p>
                Haven an cuopon <Link href={"/"}>Click to get it</Link>{" "}
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-5 mt-10">
            <div className="flex flex-col">
              <h1 className="border-b-2 text-3xl font-semibold">
                Biilling Details
              </h1>
              <div className="flex flex-col mt-8">
                <label htmlFor="country" className="flex ">
                  Country <FaStar style={{ color: "yellow" }} />
                </label>
                <select
                  name="country"
                  id="country"
                  className="p-2 border-2 rounded outline-none"
                >
                  <option value="Bangladesh">Bangladesh</option>
                  <option value="Albania">Albania</option>
                  <option value="Kosova">Kosova</option>
                </select>
              </div>
              <div className="grid grid-cols-2 gap-2 mt-5">
                <div className="flex flex-col">
                  <label htmlFor="firstname" className="flex ">
                    First Name <FaStar className="size-3 " />
                  </label>
                  <input type="text" className="border-2 rounded p-1" />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="lastname" className="flex ">
                    Last Name <FaStar className="size-3 " />
                  </label>
                  <input type="text" className="border-2 rounded p-1" />
                </div>
              </div>
              <div className="flex flex-col mt-5">
                <label htmlFor="companyName" className="flex ">
                  Company Name
                </label>
                <input type="text" className="border-2 rounded p-1" />
              </div>
              <div className="flex flex-col mt-5">
                <label htmlFor="lastname" className="flex ">
                  Address
                  <FaStar className="size-3 " />
                </label>
                <input
                  type="text"
                  className="border-2 rounded p-2 text-gray-300"
                  placeholder="Street address"
                />
                <input
                  type="text"
                  className="border-2 rounded p-2 text-gray-300 mt-5"
                  placeholder="Apartament,suit,ect"
                />
              </div>
              <div className="flex flex-col mt-5">
                <label htmlFor="city" className="flex ">
                  Town / City <FaStar className="size-3 " />
                </label>
                <input type="text" className="border-2 rounded p-1" />
              </div>
              <div className="grid grid-cols-2 gap-2 mt-5">
                <div className="flex flex-col">
                  <label htmlFor="State" className="flex ">
                    State / County <FaStar className="size-3 " />
                  </label>
                  <input type="text" className="border-2 rounded p-1" />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="postcode" className="flex ">
                    Postcode / Zip <FaStar className="size-3 " />
                  </label>
                  <input type="text" className="border-2 rounded p-1" />
                </div>
                <div className="flex flex-col mt-5">
                  <label htmlFor="Email Address" className="flex ">
                    Email Address <FaStar className="size-3 " />
                  </label>
                  <input type="text" className="border-2 rounded p-1" />
                </div>
                <div className="flex flex-col mt-5">
                  <label htmlFor="phone" className="flex ">
                    Phone <FaStar className="size-3 " />
                  </label>
                  <input type="text" className="border-2 rounded p-1" />
                </div>
              </div>

              <div className="flex flex-col border-b-2 mt-5">
                <div className="flex space-x-2">
                  <input type="checkbox" />
                  <p>Create an account</p>
                </div>
                <div className="flex space-x-2 mt-3">
                  <p>Ship to an different address</p>
                  <input type="checkbox" />
                </div>
              </div>

              <div className="flex flex-col mt-5">
                <label className="flex ">Order notes</label>
                <textarea
                  className="text-slate-400 p-2 border-2"
                  placeholder=" Notes about your order ,e,g, special notes for delivery"
                ></textarea>
              </div>
            </div>

            <div className="bg-slate-100 p-7 ">
              <h1 className="font-bold text-3xl">Your order</h1>

              <OrderTable products={getAllProducts} />

              <div className="mt-14 space-y-4">
                <p className="font-semibold">Direct Bank Transfer.</p>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et
                  aliquid autem pariatur quos enim sint asperiores nostrum
                  molestias fugiat sunt, atque architecto neque dolore harum
                  sapiente. Rem earum quibusdam quas voluptatum assumenda
                  accusam us in eius maxime porro facilis error odio provident
                  ipsum nisi, explicabo dolor, corporis, illum nemo?
                  Perferendis, eaque.
                </p>

                <p className="font-semibold">Checque Paynment</p>
                <p className="font-semibold">Paypal</p>

                <PlaceOrder />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
