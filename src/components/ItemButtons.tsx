import React from "react";
import { ItemButtonsProps } from "../utils/types";

const ItemButtons: React.FC<ItemButtonsProps> = ({ pricingRules, addItem }) => {
  return (
    <div>
      {Object.keys(pricingRules).map((item) => (
        <button
          key={item}
          onClick={() => addItem(item)}
        >
          Scan {item}
        </button>
      ))}
    </div>
  );
};

export default ItemButtons;
