"use client";
import React, { useState } from "react";

interface Props {
  description: string;
  specification: string;
  reviews: string;
}
const DetailsDescription = ({ description, specification, reviews }: Props) => {
  const [selectedValueDetails, setDetailsValue] = useState("Description");

  return (
    <div className="mt-10 border-b-2">
      <div className="flex space-x-8 border-b-2 ">
        <button
          className={`${
            selectedValueDetails === "Description"
              ? "border-b-2 border-black font-bold"
              : ""
          }`}
          onClick={() => setDetailsValue("Description")}
        >
          Description
        </button>
        <button
          onClick={() => setDetailsValue("Specification")}
          className={`${
            selectedValueDetails === "Specification"
              ? "border-b-2 border-black font-bold"
              : ""
          }`}
        >
          Specification
        </button>
        <button
          onClick={() => setDetailsValue("Reviews")}
          className={`${
            selectedValueDetails === "Reviews"
              ? "border-b-2 border-black font-bold"
              : ""
          }`}
        >
          Reviews
        </button>
      </div>
      <p className="pb-4">
        {selectedValueDetails === "Description" && description}
        {selectedValueDetails === "Specification" && specification}
        {selectedValueDetails === "Reviews" && reviews}
      </p>
    </div>
  );
};

export default DetailsDescription;
