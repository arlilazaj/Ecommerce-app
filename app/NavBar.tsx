import Link from "next/link";
import React from "react";
import { FcPhone } from "react-icons/fc";
import { IoMdSearch } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { MdLuggage } from "react-icons/md";
import { TbCategoryFilled } from "react-icons/tb";
import CustomSelect from "./components/CustomSelect";
import LoggedinUser from "./components/LoggedinUser";
import SearchBar from "./components/SearchBar";
const NavBar = () => {
  return (
    <>
      <div className="h-40 sm:h-12 bg-slate-100 w-full flex items-center justify-center mb-4">
        <div className=" sm:flex  justify-between items-center w-[70%] ">
          <h1 className="font-light font-serif  ">
            FREE SHIPPING FOR ALL ORDERS OF{" "}
            <span className="font-bold">$200</span>
          </h1>
          <ul className="flex justify-between space-x-5 font-sans">
            <Link className="hover:text-yellow-400" href={"/"}>
              HOME
            </Link>
            <Link href={"/pages/Cart"} className="hover:text-yellow-400">
              CART
            </Link>
            <Link href={"/pages/Wishlist"} className="hover:text-yellow-400">
              WISHLIST
            </Link>
            <Link href={"/pages/Checkout"} className="hover:text-yellow-400">
              CHECKOUT
            </Link>
          </ul>
        </div>
      </div>

      <div className="w-full flex items-center justify-center ">
        <div className="flex  justify-center space-x-12 items-center w-[70%]">
          <div className="flex">
            <FcPhone className="size-12" />
            <div>
              <h3>Need help?</h3>
              <p>(+233)123 345 143</p>
            </div>
          </div>
          <div>
            <div className="flex justify-center items-center">
              <SearchBar />
              <IoMdSearch className="absolute ml-48" />
            </div>
          </div>
          <div className="flex space-x-3">
            <CiHeart />
            <div className="flex">
              <MdLuggage />
              <p>$546.23</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex items-center justify-center mt-10">
        <div className="flex justify-between   w-[70%]">
          <div className="flex space-x-2 items-center bg-yellow-400 h-16 w-64 p-6 rounded-t-2xl">
            <TbCategoryFilled />
            <h1 className="font-bold">All Department</h1>
          </div>
          <div className="flex items-center   ">
            <CustomSelect />
          </div>
          <LoggedinUser />
        </div>
      </div>
    </>
  );
};

export default NavBar;
