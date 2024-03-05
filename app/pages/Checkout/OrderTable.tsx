"use client";
import { Products } from "@/app/entites/Products";
import React, { useEffect, useState } from "react";
import { ProductCart } from "../Cart/AddToCart";
import { Toaster } from "react-hot-toast";

const OrderTable = ({ products }: { products: Products[] }) => {
  const [cartProducts, setCartProducts] = useState<
    (Products & { cartQuantity: number })[]
  >([]);
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  useEffect(() => {
    const productData = localStorage.getItem("ProductCart");
    if (productData !== null) {
      const storedProducts: ProductCart[] = JSON.parse(productData);

      const matchedProducts = storedProducts
        .map(({ id, quantity }) => {
          const matchedProduct = products.find(
            (product) => product.id === Number(id)
          );

          if (matchedProduct) {
            return { ...matchedProduct, cartQuantity: quantity };
          }
          return null;
        })
        .filter((product) => product !== null) as (Products & {
        cartQuantity: number;
      })[];

      setCartProducts(matchedProducts);
    }
  }, [products]);
  let total = 0;
  cartProducts.forEach((product) => {
    total +=
      product.cartQuantity !== undefined
        ? product.cartQuantity * product.price
        : selectedQuantity * product.price;
  });
  return (
    <>
      <div>
        <Toaster />
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th className="text-xl">Product</th>
              <th className="text-xl">Total</th>
            </tr>
          </thead>
          <tbody>
            {cartProducts.map((product) => (
              <tr key={product.id} className="border-b-2 border-black">
                <td>
                  {product.type}* {product.cartQuantity}
                </td>
                <td>{product.price * product.cartQuantity}</td>
              </tr>
            ))}
            <tr className="border-b-2 border-black">
              <td className="font-bold">Cart Subtotal</td>
              <td>{total}</td>
            </tr>
            <tr className="border-b-2 border-black">
              <td className="font-bold">Order total</td>
              <td className="font-bold">{total}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default OrderTable;
