"use client";
import React from "react";
import toast from "react-hot-toast";
interface Props {
  params: { id: number };
}
export interface ProductWishlist {
  id: number;
}

const AddToWishlistComponent = ({ params: { id } }: Props) => {
  const AddToWishlist = () => {
    let arr: ProductWishlist[] = [];

    const existingIds = localStorage.getItem("ProductWishlist");

    if (existingIds) {
      arr = JSON.parse(existingIds);
    }

    const product = arr.find((item) => item.id === id);

    if (product) {
      toast.error("Product is already in Wishlist");
    } else {
      arr.push({ id });
      toast.success("Product is added to Wishlist");
    }

    localStorage.setItem("ProductWishlist", JSON.stringify(arr));
    localStorage.removeItem("cart-id");
  };
  return <button onClick={AddToWishlist}>Add to wishlist</button>;
};

export default AddToWishlistComponent;
