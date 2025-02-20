import React, { useState } from "react";
import { CheckoutProps, HistoryState } from "../utils/types";
import ItemButtons from "./ItemButtons";
import Basket from "./Basket";
import Header from "./Header";
import { calculateBasketTotal } from "../utils/calculateBasketTotal";


const Checkout: React.FC<CheckoutProps> = ({ pricingData }) => {
  const [basket, setBasket] = useState<string[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [offersApplied, setOffersApplied] = useState<string[]>([]);
  const [history, setHistory] = useState<HistoryState[]>([]); 

  const addItem = (item: string): void => {

    const newBasket = [...basket, item];
    const { total, offersApplied } = calculateBasketTotal(newBasket, pricingData);

    setHistory([...history, { basket, total, offersApplied }]);

    setBasket(newBasket);
    setTotal(total);
    setOffersApplied(offersApplied);
  };

  const clearBasket = (): void => {
    setBasket([]);
    setTotal(0);
    setOffersApplied([]);
  };

  const undoLastAction = (): void => {
    if (history.length > 0) {

      const lastState = history[history.length - 1];
      
      setBasket(lastState.basket);

      const { total, offersApplied } = calculateBasketTotal(lastState.basket, pricingData);

      setTotal(total);

      setOffersApplied(offersApplied);
      setHistory(history.slice(0, -1));
    }
  };

  return (
    <div className="checkout-container">
<Header />

      <ItemButtons pricingRules={pricingData} addItem={addItem} />
      <Basket basket={basket} />
      <h3>Total: £{(total / 100).toFixed(2)}</h3>
      {offersApplied.length > 0 && (
        <div>
          <h4>{offersApplied.length === 1 ? 'Offer Applied:' : 'Offers Applied:'}</h4>
          <ul className="offers-list">
            {offersApplied.map((offer, index) => (
              <li key={index}>{offer}</li>
            ))}
          </ul>
        </div>
      )}
      <button onClick={undoLastAction} disabled={history.length === 0}>
        Undo
      </button>
      <button onClick={clearBasket}>Clear Basket</button>
    </div>
  );
};

export default Checkout;


