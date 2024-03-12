import React, { useState } from "react";
import { IProduct } from "../models";

interface ProductProps {
  product: IProduct;
}

export function Product({ product }: ProductProps) {
  const [details, setDetails] = useState(false);

  const btnBgClassName = details ? "bg-yellow-400" : "bg-blue-400";
  const btnClasses = ["py-2 px-4 border", btnBgClassName];

  return (
    <div className="border py-2 px-4 rounded flex flex-col items-center mb-2">
      <img src={product.image} className="w-1/6"></img>
      <p>{product.title}</p>
      <span className="font-bold">{product.price}</span>
      <button
        onClick={() => {
          setDetails(!details);
        }}
        className={btnClasses.join(" ")}
      >
        {details ? "Hide Details" : "Show Details"}
      </button>
      {details && (
        <div>
          <p>{product.description}</p>
          <p>
            Rate:{" "}
            <span style={{ fontWeight: "bold" }}>
              {product?.rating?.rate
                ? product.rating.rate
                : "There are no rating yet"}
            </span>
          </p>
        </div>
      )}
    </div>
  );
}
