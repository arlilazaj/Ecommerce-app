"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { AiOutlineDelete } from "react-icons/ai";
import { ProductCart } from "@/app/pages/Cart/AddToCart";
import { Products } from "@/app/entites/Products";
import { useRouter } from "next/navigation";

const CartTable = ({ products }: { products: Products[] }) => {
  const router = useRouter();
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

  const deleteProduct = (id: number) => {
    let products: ProductCart[] = [];
    const productData = localStorage.getItem("ProductCart");
    if (productData !== null) {
      const storedProducts: ProductCart[] = JSON.parse(productData);
      products = storedProducts.filter((product) => Number(product.id) !== id);
      setCartProducts((prevState) => prevState.filter((x) => x.id !== id));
    }

    localStorage.setItem("ProductCart", JSON.stringify(products));
  };

  const handleQuantityChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    id: number
  ) => {
    const newValue = parseInt(event.target.value);
    setCartProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id ? { ...product, cartQuantity: newValue } : product
      )
    );
    const updatedProducts = cartProducts.map((product) =>
      product.id === id
        ? { id: product.id, quantity: newValue }
        : { id: product.id, quantity: product.cartQuantity }
    );
    localStorage.setItem("ProductCart", JSON.stringify(updatedProducts));
  };

  return (
    <div className="mt-10 w-full flex items-center justify-center my-10">
      <div className="w-[70%] flex flex-col">
        <h1>Home {">"} Cart</h1>
        <table className="border-collapse border border-slate-400 mt-10">
          <thead className="border border-slate-300 ">
            <tr>
              {" "}
              <th className="border border-slate-300 p-4">Remove</th>
              <th className="border border-slate-300">Images</th>
              <th className="border border-slate-300">Product</th>
              <th className="border border-slate-300">Unit Price</th>
              <th className="border border-slate-300">Quantity</th>
              <th className="border border-slate-300">Total</th>
            </tr>
          </thead>
          <tbody className="border border-slate-300 text-center">
            {cartProducts.map((product) => (
              <tr key={product.id}>
                {" "}
                <td
                  className="border border-slate-300"
                  onClick={() => deleteProduct(product.id)}
                >
                  <AiOutlineDelete
                    style={{ margin: "auto" }}
                    className="size-8"
                  />
                </td>
                <td className="border border-slate-100 flex justify-center items-center ">
                  <Image
                    src={`data:image/jpeg;base64,${product.image}`}
                    alt={product.type}
                    width={100}
                    height={100}
                  />
                </td>
                <td className="border border-slate-300">{product.type}</td>
                <td className="border border-slate-300">{product.price}</td>
                <td className="border border-slate-300">
                  <input
                    type="number"
                    value={product.cartQuantity}
                    onChange={(e) => handleQuantityChange(e, product.id)}
                    className="outline-none w-12 border-2 rounded p-1 h-12 "
                  />
                </td>
                <td className="border border-slate-300">
                  {product.price * product.cartQuantity}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex mt-10 justify-between">
          <div className="flex space-x-2">
            <input
              type="text"
              placeholder="Coupon code"
              className="border-2 text-slate-300 p-3 w-32 outline-none"
            />
            <button className="bg-black text-white p-3">Apply coupon</button>
          </div>
          <button
            className="bg-black text-white p-3"
            onClick={() => router.push("/")}
          >
            Update Cart
          </button>
        </div>

        <div className="mt-10 flex flex-col w-44 ">
          <p>Cart Totals</p>
          <div className="flex justify-between border-2 p-1  rounded mb-1">
            <span>Subototal</span>
            <span>{total}</span>
          </div>
          <div className="flex justify-between border-2 p-1  rounded">
            <span>total</span>
            <span>{total}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartTable;
