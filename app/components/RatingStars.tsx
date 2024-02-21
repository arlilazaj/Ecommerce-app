import React from "react";
import { CiStar } from "react-icons/ci";
interface Props {
  rating: number;
}
const RatingStars = ({ rating }: Props) => {
  const generateStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      const isFilled = i <= rating;
      stars.push(
        <CiStar
          key={i}
          className="size-8"
          style={{ color: isFilled ? "yellow" : "gray" }}
        />
      );
    }
    return stars;
  };
  return <div className="flex">{generateStars(rating)}</div>;
};

export default RatingStars;
