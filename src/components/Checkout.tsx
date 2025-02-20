import React, { useState } from "react";
import { CheckoutProps } from "../utils/types";
import ItemButtons from "../components/ItemButtons";
import Basket from "../components/Basket";
import { calculateTotal } from "../utils/calculateTotal";

const Checkout: React.FC<CheckoutProps> = ({ pricingRules }) => {
  const [basket, setBasket] = useState<string[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [offersApplied, setOffersApplied] = useState<string[]>([]);

  const addItem = (item: string): void => {
    const newBasket = [...basket, item]; 
    setBasket(newBasket);

    const { total, offersApplied } = calculateTotal(newBasket, pricingRules);
    setTotal(total);
    setOffersApplied(offersApplied);
  };

  const clearBasket = (): void => {
    setBasket([]);
    setTotal(0);
    setOffersApplied([]);
  };

  return (
    <div className="checkout-container">
      <h2 >Checkout System</h2>

      <ItemButtons pricingRules={pricingRules} addItem={addItem} />
      <Basket basket={basket} />
      <h3>Total: £{(total / 100).toFixed(2)}</h3>
      {offersApplied.length > 0 && (
        <div>
          <h4>Offer Applied:</h4>
          <ul>
            {offersApplied.map((offer, index) => (
              <li key={index}>{offer}</li>
            ))}
          </ul>
        </div>
      )}
      <button 
        onClick={clearBasket}
      >
        Clear Basket
      </button>
    </div>
  );
};

export default Checkout;
