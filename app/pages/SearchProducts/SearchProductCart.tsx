import { Products } from "@/app/entites/Products";
import { useSearchParams } from "next/navigation";
import React from "react";

interface Props {
  products: Products[];
}
const SearchProductCart = ({products}:Props) => {
  const searchParams = useSearchParams();
  const search = searchParams.get("searchText");
  return (
    <div className="mt-20  w-full flex items-center justify-center  my-10">
      <div className="w-[70%] flex md:justify-between space-x-3"></div>
    </div>
  );
};

export default SearchProductCart;
