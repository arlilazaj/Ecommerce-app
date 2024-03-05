"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Products } from "@/app/entites/Products";
import { ProductCart } from "@/app/pages/Cart/AddToCart";
import { ProductWishlist } from "@/app/pages/Wishlist/AddToWishlist";
import { AiOutlineDelete } from "react-icons/ai";
import AddToCartButton from "./AddToCartButton";
import { Toaster } from "react-hot-toast";
const WishlistTable = ({ products }: { products: Products[] }) => {
  const [wishlistProduct, setWishilistProduct] = useState<Products[]>([]);

  useEffect(() => {
    const productData = localStorage.getItem("ProductWishlist");
    if (productData !== null) {
      const storedProducts: ProductWishlist[] = JSON.parse(productData);

      const matchedProducts = storedProducts
        .map(({ id }) => {
          const matchedProduct = products.find(
            (product) => product.id === Number(id)
          );

          if (matchedProduct) {
            return matchedProduct;
          }
          return null;
        })
        .filter((product) => product !== null) as Products[];

      setWishilistProduct(matchedProducts);
    }
  }, [products]);
  const deleteProduct = (id: number) => {
    let products: ProductWishlist[] = [];
    const productData = localStorage.getItem("ProductWishlist");
    if (productData !== null) {
      const storedProducts: ProductWishlist[] = JSON.parse(productData);
      products = storedProducts.filter((product) => Number(product.id) !== id);
      setWishilistProduct((prevState) => prevState.filter((x) => x.id !== id));
    }

    localStorage.setItem("ProductWishlist", JSON.stringify(products));
  };
  return (
    <>
      <div>
        <Toaster />
      </div>
      <div className="mt-10 w-full flex items-center justify-center my-10">
        <div className="w-[70%] flex flex-col">
          <h1>Home {">"} Wishlist</h1>
          <table className="border-collapse border border-slate-400 mt-10">
            <thead className="border border-slate-300 ">
              <tr>
                {" "}
                <th className="border border-slate-300 p-4">Remove</th>
                <th className="border border-slate-300">Images</th>
                <th className="border border-slate-300">Product</th>
                <th className="border border-slate-300">Unit Price</th>
                <th className="border border-slate-300">Stock</th>
                <th className="border border-slate-300">Add to Cart</th>
              </tr>
            </thead>
            <tbody className="border border-slate-300 text-center">
              {wishlistProduct.map((product) => (
                <tr key={product.id}>
                  {" "}
                  {/* Added table row */}
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
                  <td className="border border-slate-300">{product.stock}</td>
                  <td className="border border-slate-300">
                    <AddToCartButton id={product.id} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default WishlistTable;
