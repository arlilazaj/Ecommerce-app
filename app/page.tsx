import Image from "next/image";
import img from "/public/images/4.jpg";
import banner from "/public/images/banner3.jpg";
import sec from "/public/images/sec.jpg";
import chair from "/public/images/3.jpg";
import chair2 from "/public/images/chair.png.jpg";
import clock from "../public/images/clock.jpg";
import banner1 from "../public/images/banner.jpg";
import banner2 from "../public/images/banner1.jpg";

import { FaArrowRight } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import { IoReload } from "react-icons/io5";
import { BsCreditCardFill } from "react-icons/bs";
import { HiOutlineSupport } from "react-icons/hi";

import ProductsCard from "./components/ProductsCard";
import APIServer, { FetchResponse } from "./services/api-server";
import { Products } from "./entites/Products";
import { Category } from "./entites/Category";
import Product1 from "./components/Product1";
import Brand from "./components/Brand";
import { getSession } from "next-auth/react";

export const getProducts = async () => {
  const apiServer = new APIServer();
  const response: FetchResponse<Products> = await apiServer.getAllProducts(
    "ProductApi/getProducts",
    0,
    1,
    ""
  );

  return response.result;
};
export const getCategories = async () => {
  const apiServer = new APIServer();
  const response: FetchResponse<Category> = await apiServer.getAll(
    "CategoryApi/getCategory"
  );

  return response.result;
};

async function Home() {
  const products = await getProducts();
  const categories = await getCategories();

  return (
    <main>
      <div className="bg-slate-100 w-full flex items-center justify-center py-10 ">
        <div className="w-[70%] flex space-x-5  ">
          <div>
            <div className="absolute text-2xl font-sans pl-28 pt-12">
              <h1 className=" font-semibold">WOODEN CHAIR</h1>
              <h1 className=" font-bold">MORDEN FURNITURE</h1>
              <span className="text-red-800">$200</span>
            </div>
            <Image
              src={img}
              width={500}
              height={500}
              alt="Picture of the author "
            />
          </div>
          <div>
            <div className="absolute p-10 ">
              <h1 className="text-slate-400">Console Tables</h1>
              <h1>Beoplay A1 Sound Accesories</h1>
              <FaArrowRight />
            </div>
            <Image
              src={banner}
              width={300}
              height={200}
              alt="Picture of the author"
              className="max-h-[499px]  "
            />
          </div>
          <div className="space-y-4">
            <div>
              <div className="absolute p-3 ">
                <h1 className="text-slate-400">Console Tables</h1>
                <h1>Beoplay A1 Sound Accesories</h1>
                <FaArrowRight />
              </div>
              <Image src={sec} alt="static pic" width={250} height={150} />
            </div>
            <div>
              <div className="absolute p-3 ">
                <h1 className="text-slate-400">Console Tables</h1>
                <h1>Beoplay A1 Sound Accesories</h1>
                <FaArrowRight />
              </div>
              <Image src={chair} alt="static pic" width={250} height={150} />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20  w-full flex items-center justify-center  my-10  ">
        <div className="w-[70%] flex justify-evenly border border-slate-200 p-3 rounded-md ">
          <div className="flex space-x-3">
            <IoIosSend className="size-14 " />
            <div className="flex flex-col space-y-2">
              <p>Free Shipping</p>
              <p className="text-sm">On all orders</p>
            </div>
          </div>
          <div className="flex space-x-3">
            <IoReload className="size-12 " />
            <div className="flex flex-col space-y-2">
              <p>Easy 30 Days Returns</p>
              <p className="text-sm">30 days money back</p>
            </div>
          </div>
          <div className="flex space-x-3">
            <BsCreditCardFill className="size-12 " />
            <div className="flex flex-col space-y-2">
              <p>100% Secure</p>
              <p className="text-sm">Paypal/MasterCard/Visa</p>
            </div>
          </div>
          <div className="flex space-x-3">
            <HiOutlineSupport className="size-12 " />
            <div className="flex flex-col space-y-2">
              <p>24/7 Support</p>
              <p className="text-sm">We will be at your service</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20  w-full flex items-center justify-center  my-10">
        <div className="w-[70%] flex md:justify-between space-x-3">
          <div className="flex">
            <Image src={chair2} alt="chair2" />
            <div className="text-center absolute py-10 px-80">
              <h1 className="text-sm text-red-800 font-bold">
                Living Room Set
              </h1>
              <h1 className="font-bold">Hajdfhdhp playodd</h1>
              <h1 className="font-bold">New Chair</h1>
              <button className="btn btn-neutral rounded-full ">
                Shop now
              </button>
            </div>
          </div>
          <div className="flex">
            <Image src={clock} alt="chair2" />
            <div className="text-center absolute py-10 px-72 ">
              <h1 className="text-sm text-red-800 font-bold">Home decor</h1>
              <h1 className="font-bold">The best clock</h1>
              <h1 className="font-bold">Creative furniture</h1>
              <button className="btn btn-neutral rounded-full">Shop now</button>
            </div>
          </div>
        </div>
      </div>
      <ProductsCard
        categories={categories}
        exludedCategories={[5, 6, 14, 7, 8]}
      />

      <div className="mt-20  w-full flex items-center justify-center  my-10">
        <div className="w-[70%] flex md:justify-between space-x-3">
          <div className="flex">
            <Image src={banner2} alt="chair2" />
            <div className="text-center absolute py-10 px-80">
              <h1 className="text-sm text-red-800 font-bold">
                Living Room Set
              </h1>
              <h1 className="font-bold">Hajdfhdhp playodd</h1>
              <h1 className="font-bold">New Chair</h1>
              <button className="btn btn-neutral rounded-full ">
                Shop now
              </button>
            </div>
          </div>
          <div className="flex">
            <Image src={banner1} alt="chair2" />
            <div className="text-center absolute py-10 px-72 ">
              <h1 className="text-sm text-red-800 font-bold">Home decor</h1>
              <h1 className="font-bold">The best clock</h1>
              <h1 className="font-bold">Creative furniture</h1>
              <button className="btn btn-neutral rounded-full">Shop now</button>
            </div>
          </div>
        </div>
      </div>

      <Product1
        categories={categories}
        exludedCategories={[1, 2, 4, 3, 7, 8]}
      />

      <Brand />
    </main>
  );
}
export default Home;
