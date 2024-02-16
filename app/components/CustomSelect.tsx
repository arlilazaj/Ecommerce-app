"use client";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import React, { useState } from "react";

const CustomSelect = () => {
  const router = useRouter();
  const pathname = usePathname();
  console.log("s", pathname);
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectChange = (e: any) => {
    setSelectedOption(e.target.value);
  };

  return (
    <>
      <div>
        <select
          id="mySelect"
          className={`outline-none
 ${selectedOption ? "hover:text-yellow-400" : ""}${
            pathname === "/" && "text-yellow-300"
          }`}
          onChange={handleSelectChange}
          value={selectedOption}
        >
          <option value="Home">Home</option>
          <option value="Cart">Cart</option>
          <option value="Wishlist">Wishlist</option>
          <option value="Checkout">Checkout</option>
        </select>
        {pathname === "/" && <div className="w-full  h-1 bg-yellow-300" />}
      </div>
      <select
        className={` px-4  outline-none  ${
          selectedOption ? "hover:text-yellow-400" : ""
        }`}
        onChange={handleSelectChange}
        value={selectedOption}
      >
        <option value="Shop">Shop</option>
        <option value="Shop Left">Shoft Left</option>
      </select>
      <Link className="ml-3  " href="/">
        <p className="hover:text-yellow-400">Contact</p>
      </Link>
    </>
  );
};

export default CustomSelect;
