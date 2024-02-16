import React from "react";
import Image from "next/image";
import { CiStar } from "react-icons/ci";
import divan from "/public/images/product1.jpg";
const Products = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center space-y-3 ">
        <h1 className="font-semiboldbold text-3xl">Deal Of The Week</h1>
        <div className="h-2 w-16 bg-yellow-500 rounded"></div>
      </div>
      <div className="w-full flex items-center justify-center">
        <div className="w-[70%] flex  justify-between space-x-4  ">
          <div className="flex flex-col border border-slate-200 rounded p-4 space-y-2">
            <Image src={divan} width={300} height={400} alt="divan" />
            <div className="flex ">
              <span className="font-bold text-red-800">$70.00</span>
              <span className=" text-gray-400 text-sm line-through">
                $80.00
              </span>
            </div>
            <p>Aliquet auctor semali</p>
            <div className="flex ">
              <CiStar />
              <CiStar />
              <CiStar />
              <CiStar />
              <CiStar />
            </div>
            <div className="flex justify-between mb-2 ">
              <p>
                Available: <span className="font-bold">369</span>
              </p>
              <p>
                Unit Sold: <span className="font-bold">121</span>
              </p>
            </div>
            <input
              type="range"
              min={0}
              max="100"
              value="40"
              className="range range-warning"
            />

            <div className="flex space-x-3 items-center justify-center border-2 rounded-full border-yellow-300 mt-5">
              <div className="flex flex-col">
                <p>505</p>
                <p>Days</p>
              </div>
              <div className="flex flex-col">
                <p>15</p>
                <p>hours</p>
              </div>
              <div className="flex flex-col">
                <p>41</p>
                <p>min</p>
              </div>
              <div className="flex flex-col">
                <p>36</p>
                <p>sec</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
