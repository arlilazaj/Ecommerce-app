import React from "react";
import { IoStar } from "react-icons/io5";
interface Props {
  rating: number;
}
const RatingStars = ({ rating }: Props) => {
  const generateStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      const isFilled = i <= rating;
      stars.push(
        <IoStar
          key={i}
          className="size-8"
          style={{ color: isFilled ? "orange" : "#D3D3D3" }}
        />
      );
    }
    return stars;
  };
  return <div className="flex">{generateStars(rating)}</div>;
};

export default RatingStars;
