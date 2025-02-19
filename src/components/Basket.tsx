import React from "react";
import { BasketProps } from "../utils/types"

const Basket: React.FC<BasketProps> = ({ basket }) => {

  return (
    <div>
      <h3>Basket:</h3>
      <p>{basket.join(", ") || "Empty"}</p>
    </div>
  );
};

export default Basket;