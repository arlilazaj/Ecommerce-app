import { getProducts } from "@/app/page";
import CartTable from "./CartTable";

const Cart = async () => {
  const getAllProducts = await getProducts();
  return <CartTable products={getAllProducts} />;
};

export default Cart;
