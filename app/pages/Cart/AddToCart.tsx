"use client";
import React, { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
interface Props {
  params: { id: number };
}
export interface ProductCart {
  id: number;
  quantity?: number;
}

const AddToCartComponent = ({ params: { id } }: Props) => {
  const quantityName = useRef<HTMLInputElement>(null);

  const AddToCart = () => {
    const quantityValue = quantityName.current
      ? parseInt(quantityName.current.value)
      : 0;
    let arr: ProductCart[] = [];

    const existingIds = localStorage.getItem("ProductCart");

    if (existingIds) {
      arr = JSON.parse(existingIds);
    }

    const product = arr.find((item) => item.id === id);

    if (product) {
      product.quantity = quantityValue;
      toast.error("Product is already in cart");
    } else {
      arr.push({ id, quantity: quantityValue });
      toast.success("Product is added to cart");
    }

    localStorage.setItem("ProductCart", JSON.stringify(arr));
  
  };

  return (
    <div className="flex space-x-3 items-center">
      <span>Quantity</span>

      <input
        ref={quantityName}
        type="number"
        defaultValue={1}
        className="outline-none w-12 border-2 rounded p-1 h-12"
      />
      <button
        className="btn btn-outline btn-warning rounded-full w-48"
        onClick={AddToCart}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default AddToCartComponent;
