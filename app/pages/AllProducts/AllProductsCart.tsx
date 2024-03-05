import RatingStars from "@/app/components/RatingStars";
import { Products } from "@/app/entites/Products";
import Link from "next/link";
import React from "react";
import Image from "next/image";
interface Props {
  products: Products[];
}
const AllProductsCart = ({ products }: Props) => {
  return (
    <div className="grid grid-cols-3 gap-3 mt-6  ">
      {Array.isArray(products) &&
        products.map((product) => (
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
  );
};

export default AllProductsCart;
