import React from "react";
import brand1 from "/public/images/brand1.jpg";
import brand2 from "/public/images/brand2.jpg";
import brand3 from "/public/images/brand3.jpg";
import Image from "next/image";
const Brand = () => {
  return (
    <div className="mt-20  w-full flex items-center justify-center  my-10  ">
      <div className="w-[70%] flex justify-evenly border border-slate-200 p-3 rounded-md ">
        <Image src={brand1} alt="brand1" />

        <Image src={brand2} alt="brand2" />

        <Image src={brand3} alt="brand3" />

        <Image src={brand2} alt="brand2" />
        <Image src={brand1} alt="brand1" />
        <Image src={brand3} alt="brand3" />
      </div>
    </div>
  );
};

export default Brand;
