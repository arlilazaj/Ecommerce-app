"use client";
import RatingStars from "@/app/components/RatingStars";
import { Products } from "@/app/entites/Products";
import APIServer, { FetchResponse } from "@/app/services/api-server";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
const fetchProducts = async (searchText: string) => {
  if (!searchText) {
    console.error("Search text is null or undefined");
    return [];
  }

  const apiServer = new APIServer();
  const response: FetchResponse<Products> = await apiServer.getAll(
    "ProductApi/getProducts",
    searchText
  );
  return response.result;
};
const Search = () => {
  const [products, setProducts] = useState<Products[]>([]);
  const searchParams = useSearchParams();

  const search = searchParams.get("searchText") || "";
  useEffect(() => {
    const searchProducts = async () => {
      const products = await fetchProducts(search);
      setProducts(products);
    };
    searchProducts();
  }, [search]);

  return (
    <div className="mt-20  w-full flex items-center justify-center  my-10">
      <div className="w-[70%] flex md:justify-between space-x-3">
        {products.map((product) => (
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
              <span className="font-bold text-red-800">{product.price}</span>
              <span className="text-gray-400 text-sm line-through">
                {product.disccountPrice}
              </span>{" "}
            </div>
            <p>{product.type}</p>
            <div className="flex">
              <RatingStars rating={product.rating} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
