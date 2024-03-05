import { getProducts } from "@/app/page";
import React from "react";
import WishlistTable from "./WishlistTable";
import { Toaster } from "react-hot-toast";

const Wishlist = async () => {
 
  const getAllProducts = await getProducts();
  return <WishlistTable products={getAllProducts} />;
};

export default Wishlist;
