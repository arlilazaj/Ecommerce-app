"use client";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import React, { useState } from "react";

const CustomSelect = () => {
  const router = useRouter();
  const pathname = usePathname();

  const [selectedOption, setSelectedOption] = useState("Home");

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value;
    setSelectedOption(selectedValue);
    if (selectedValue === "Home") {
      router.push("/");
    } else if (selectedValue === "Cart") {
      router.push("/pages/Cart");
    } else if (selectedValue === "Wishlist") {
      router.push("/pages/Wishlist");
    } else if (selectedValue === "Checkout") {
      router.push("/pages/Checkout");
    } else if (selectedValue === "Products") {
      router.push("/pages/AllProducts");
    }
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
          <option value="Products">Products</option>
        </select>
        {pathname === "/" && <div className="w-full  h-1 bg-yellow-300" />}
      </div>

      <Link className="ml-3  " href="/">
        <p className="hover:text-yellow-400">Contact</p>
      </Link>
    </>
  );
};

export default CustomSelect;
