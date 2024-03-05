import React from "react";
import divan from "/public/images/product1.jpg";
import Image from "next/image";
import { FaInstagramSquare } from "react-icons/fa";
import chair from "/public/images/3.jpg";
import product1 from "/public/images/product4.jpg";
import product2 from "/public/images/product5.jpg";
import product3 from "/public/images/product7.jpg";
import { FaTwitter } from "react-icons/fa";
import RatingStars from "@/app/components/RatingStars";
import { FaSnapchat } from "react-icons/fa";
import { IoHeartCircle } from "react-icons/io5";
import { GoCheckCircleFill } from "react-icons/go";
import { FaFacebook } from "react-icons/fa";
import { FaShareFromSquare } from "react-icons/fa6";
import DetailsDescription from "@/app/components/DetailsDescription";
import { getCategories, getProducts } from "@/app/page";
import { Products } from "@/app/entites/Products";
import APIServer, {
  FetchResponse,
  FetchResponseById,
} from "@/app/services/api-server";
import ProductsCard from "@/app/components/ProductsCard";
import Brand from "@/app/components/Brand";
import AddToCartComponent from "@/app/pages/Cart/AddToCart";
import { Toaster } from "react-hot-toast";
import AddToWishlistComponent from "@/app/pages/Wishlist/AddToWishlist";

interface Props {
  params: { id: number };
}

const Singlepage = async ({ params: { id } }: Props) => {
  const apiServer = new APIServer();
  const response: FetchResponseById<Products> = await apiServer.get(
    "ProductApi",
    id
  );
  const product = response.result;
  const categories = await getCategories();
  return (
    <>
      <div>
        <Toaster />
      </div>
      <div className="mt-10  w-full flex items-center justify-center  my-10">
        <div className="w-[70%] flex flex-col">
          <h1>Home {">"} Single Product</h1>
          <div className="grid grid-cols-2 gap-5 mt-10">
            <div className="">
              <div className="border border-gray-200">
                <Image
                  width={500}
                  height={500}
                  src={`data:image/jpeg;base64,${product.image}`}
                  alt={product.type}
                />
              </div>
              <div className=" flex justify-evenly mt-4">
                <Image
                  src={chair}
                  className="border border-gray-200"
                  alt="divan"
                  width={100}
                  height={100}
                ></Image>
                <Image
                  src={product1}
                  alt="divan"
                  className="border border-gray-200"
                  width={100}
                  height={100}
                ></Image>
                <Image
                  src={product2}
                  alt="divan"
                  className="border border-gray-200"
                  width={100}
                  height={100}
                ></Image>
                <Image
                  src={product3}
                  alt="divan"
                  className="border border-gray-200"
                  width={100}
                  height={100}
                ></Image>
              </div>
            </div>
            <div className="flex flex-col space-y-3">
              <span className="font-bold text-3xl">$100.00</span>
              <h1>{product.type}</h1>
              <div className="flex items-center">
                <RatingStars rating={product.rating} />
                <p>({product.rating} custom review)</p>
              </div>
              <p>{product.description}</p>
              <div className="flex items-center space-x-2">
                <span>Size</span>
                <select className="border-2 p-1">
                  <option value="S">S</option>
                  <option value="M">M</option>
                  <option value="L">L</option>
                </select>
              </div>

              <div className="flex space-x-2 items-center">
                <GoCheckCircleFill style={{ color: "green" }} />
                <p>{product.stock} in Stock</p>
              </div>

              <AddToCartComponent
                params={{
                  id: id,
                }}
              />

              <div className="flex space-x-3 items-center border-b-2 pb-3">
                <IoHeartCircle style={{ color: "orange" }} />
                <AddToWishlistComponent
                  params={{
                    id: id,
                  }}
                />
                <FaShareFromSquare style={{ color: "orange" }} />
                <button>Add to compare</button>
              </div>
              <div className="space-y-3 pb-5 border-b-2">
                <p>
                  Category:{" "}
                  {product.categories.map((cat, index) => (
                    <span key={cat.id} className="text-gray-400">
                      {cat.type} {index < product.categories.length - 1 && ","}
                    </span>
                  ))}
                </p>
                <p>
                  Tags: <span className="text-gray-400">{product.tag}</span>
                </p>
              </div>
              <div className="flex space-x-3 items-center">
                <p>Share this product</p>
                <FaFacebook />
                <FaInstagramSquare />
                <FaTwitter />
                <FaSnapchat />
              </div>
            </div>
          </div>
          <DetailsDescription
            description={product.description}
            specification={product.specification}
            reviews={product.reviews}
          />
        </div>
      </div>
      <ProductsCard
        categories={categories}
        exludedCategories={[5, 6, 14, 1, 2, 3, 4]}
      />
      <Brand />
    </>
  );
};

export default Singlepage;
