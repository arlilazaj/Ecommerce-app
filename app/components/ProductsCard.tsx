import React from "react";
import Image from "next/image";
import { CiStar } from "react-icons/ci";
import divan from "/public/images/product1.jpg";

import APIServer, { FetchResponse } from "../services/api-server";

import RatingStars from "./RatingStars";
import { Category } from "../entites/Category";
import { Products } from "../entites/Products";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface Props {
  categories: Category[];
  exludedCategories: number[];
}

const ProductsCard = ({ exludedCategories, categories }: Props) => {
  return (
    <div className="w-full flex items-center justify-center mt-10">
      <div className="w-70vw flex flex-col items-center justify-center space-y-10">
        {categories.map((cat) => {
          if (!exludedCategories.includes(cat.id)) {
            return (
              <div
                key={cat.id}
                className="w-full flex flex-col items-center justify-center "
              >
                <div className="flex flex-col justify-center items-center">
                  <h1 className="font-semibold text-3xl ">{cat.type}</h1>
                  <div className="h-2 w-16 bg-yellow-500 rounded"></div>
                </div>
                <div className="flex w-[70%]  mt-6 space-x-3">
                  {cat.products.map((product) => (
                    <div
                      key={product.id}
                      className="flex flex-col border border-slate-200 rounded p-4 space-y-2"
                    >
                      <Link href={"/SingleProduct/" + product.id}>
                        <Image
                          src={`data:image/jpeg;base64,${product.image}`}
                          width={400}
                          height={500}
                          alt="divan"
                        />
                      </Link>
                      <div className="flex justify-between">
                        <span className="font-bold text-red-800">
                          {product.price}
                        </span>
                        <span className="text-gray-400 text-sm line-through">
                          {product.disccountPrice}
                        </span>
                      </div>
                      <p>{product.type}</p>
                      <div className="flex">
                        <RatingStars rating={product.rating} />
                      </div>
                      {cat.id === 1 && (
                        <>
                          <div className="flex justify-between mb-2">
                            <p>
                              Available:{" "}
                              <span className="font-bold">{product.stock}</span>
                            </p>
                            <p>
                              Unit Sold:{" "}
                              <span className="font-bold">
                                {product.unitSold}
                              </span>
                            </p>
                          </div>
                          <input
                            type="range"
                            min={0}
                            max={product.stock}
                            value={(product.unitSold / product.stock) * 100}
                            className="range range-warning"
                            disabled
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
                        </>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default ProductsCard;
