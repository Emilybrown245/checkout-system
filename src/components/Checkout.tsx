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
    if (!pricingData[item]) {
      console.error(`Item "${item}" is not found in pricing data.`);
      return; 
    }

    const newBasket = [...basket, item];
    const { total, offersApplied } = calculateBasketTotal(newBasket, pricingData);

    setHistory([...history, { basket, total, offersApplied }]);

    setBasket(newBasket);
    setTotal(total);
    if (offersApplied.length > 0) {
      setOffersApplied([offersApplied[offersApplied.length - 1]]);
    }
  };

  const clearBasket = (): void => {
    if (basket.length === 0) {
      console.warn("Basket is already empty.");
      return;
    }
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

      if (offersApplied.length > 0) {
        setOffersApplied([offersApplied[offersApplied.length - 1]]);
      } else {
        setOffersApplied([]);
      }

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

          <h4 id="offer-title">Offer Applied:</h4>
          <p id="special-offer-notification">{offersApplied[0]}</p> 

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


