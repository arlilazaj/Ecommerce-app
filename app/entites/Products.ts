import { Category } from "./Category";

export interface Products {
  id: number;
  image: string;
  description: string;
  specification: string;
  reviews: string;
  price: number;
  rating: number;
  type: string;
  disccountPrice: number;
  stock: number;
  tag: string;
  unitSold: number;
  categories: Category[];
}
