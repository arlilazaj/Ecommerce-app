"use client";
import { getProducts } from "@/app/page";
import React, { useEffect, useState } from "react";
import { BiSolidCategory } from "react-icons/bi";
import PaginatedProducts from "./AllProductsCart";
import AllProductsCart from "./AllProductsCart";
import { Products } from "@/app/entites/Products";
import APIServer, { FetchResponse } from "@/app/services/api-server";

const apiServer = new APIServer();
const AllProducts = () => {
  const [allProducts, setAllProducts] = useState<Products[]>([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [pageSize, setPageSize] = useState(2);
  const [totalCount, setTotalCount] = useState(0);
  const [sortBy, setSortBy] = useState("");

  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        const products: FetchResponse<Products> =
          await apiServer.getAllProducts(
            "ProductApi/sortByExpression",
            pageSize,
            pageNumber,
            sortBy
          );
        setAllProducts(products.result);
        setTotalCount(products.total);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchAllProducts();
  }, [pageNumber, pageSize, sortBy]);
  const handlePreviousPage = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
    }
  };

  const handleNextPage = () => {
    setPageNumber(pageNumber + 1);
  };
  const hasNextPage = pageNumber * pageSize < totalCount;
  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(e.target.value);
    console.log(e.target.value);
  };
  return (
    <div className="mt-10  w-full flex items-center justify-center  my-10">
      <div className="w-[70%] flex flex-col">
        <div className="flex justify-between items-center">
          <BiSolidCategory />
          <h1>
            Showing {(pageNumber - 1) * pageSize + 1} - {""}
            {Math.min(pageNumber * pageSize, totalCount)} of {""}
            {totalCount} products
          </h1>
          <div className="flex justify-center items-center space-x-3">
            <label className="min-w-fit">Sort By</label>
            <select
              value={sortBy}
              onChange={handleSortChange}
              className="select select-bordered w-full max-w-xs"
            >
              <option disabled selected>
                --Select--
              </option>
              <option>Type</option>
              <option>Price</option>
            </select>
          </div>
        </div>
        <AllProductsCart products={allProducts} />
        <div className="flex justify-between mt-4">
          <button
            className={`p-2 rounded ${
              pageNumber === 1 ? "bg-gray-300" : "bg-yellow-400"
            }`}
            onClick={handlePreviousPage}
            disabled={pageNumber === 1}
          >
            Previous
          </button>

          <button
            className={`p-2 rounded ${
              !hasNextPage ? "bg-gray-300" : "bg-yellow-400"
            }`}
            onClick={handleNextPage}
            disabled={!hasNextPage}
          >
            Next Page
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
