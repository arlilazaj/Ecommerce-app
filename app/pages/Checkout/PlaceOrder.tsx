"use client";
import React, { useEffect, useState } from "react";
import { ProductCart } from "../Cart/AddToCart";
import { FetchResponse } from "@/app/services/api-server";
import toast from "react-hot-toast";

const PlaceOrder = () => {
  const addOrder = async () => {
    const dataCart = localStorage.getItem("ProductCart");
    const userId = localStorage.getItem("userId");
    const token = localStorage.getItem("token");
    if (dataCart !== null && userId !== null && token !== null) {
      const productCart: ProductCart[] = JSON.parse(dataCart);
      const user = JSON.parse(userId);
      const tokeni = JSON.parse(token);
      const productsIds = productCart.map((product) => Number(product.id));
      const productQuantities = productCart.map((product) =>
        Number(product.quantity)
      );

      const orderData = {
        userId: user,
        productId: productsIds,
        quantity: productQuantities,
      };
      console.log(orderData);
      const postOrder = await fetch("http://localhost:5049/api/OrderApi", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${tokeni}`,
        },
        body: JSON.stringify(orderData),
      });
      const res = await postOrder.json();

      toast.success("Order placed succesfully");
    }
  };

  return (
    <button
      className="bg-black text-white px-2 rounded w-full h-10"
      onClick={addOrder}
    >
      Place order
    </button>
  );
};

export default PlaceOrder;
