import React from "react";
import Star from "@/icons/star.svg?react";

const Rating = ({ rate,className,...props }) => {
  return (
    <div className="flex gap-0.5">
      {Array.from(Array(5)).map((star, index) => (
        <Star
          className={` ${
            index + 1 <= rate ? "fill-secondary " : "fill-white "
          }${className} `}
          key={index}
        />
      ))}
    </div>
  );
};

export default Rating;
