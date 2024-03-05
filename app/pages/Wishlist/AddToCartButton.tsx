import React from "react";
import toast from "react-hot-toast";
import { ProductWishlist } from "./AddToWishlist";
import { ProductCart } from "../Cart/AddToCart";
interface Props {
  id: number;
}
const AddToCartButton = ({ id }: Props) => {
  const AddtoCart = () => {
    let arr2: ProductCart[] = [];

    const existingProductCart = localStorage.getItem("ProductCart");

    if (existingProductCart) {
      arr2 = JSON.parse(existingProductCart);
    }

    const product = arr2.find((product) => product.id == id);

    if (product) {
      toast.error("Product is already in Cart");
    } else {
      arr2.push({ id });
      toast.success("Product is added to Cart");
    }

    localStorage.setItem("ProductCart", JSON.stringify(arr2));
  };
  return (
    <button className="text-white bg-black p-2" onClick={AddtoCart}>
      Add to Cart
    </button>
  );
};
export default AddToCartButton;
