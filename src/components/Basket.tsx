import React from "react";
import { BasketProps } from "../utils/types"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBasketShopping } from "@fortawesome/free-solid-svg-icons"; 

const Basket: React.FC<BasketProps> = ({ basket }) => {

  return (
    <div className="basket-container">
      <div className="basket-header">
 <FontAwesomeIcon icon={faBasketShopping} id="basket-icon"/> 
      <h3>Basket:</h3>
      </div>
      <p className="basket-items">{basket.join(", ") || "Empty"}</p>
    </div>
  );
};

export default Basket;