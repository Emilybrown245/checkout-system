import React, { useState } from 'react';
import { CheckoutProps } from '../utils/types';
import ItemButtons from '../components/ItemButtons';
import Basket from '../components/Basket';
import { calculateTotal } from '../utils/calculateTotal'; 

const Checkout: React.FC<CheckoutProps> = ({ pricingRules }) => {
  const [basket, setBasket] = useState<string[]>([]);

  const addItem = (item: string): void => {
    const newBasket = [...basket, item]; 
    setBasket(newBasket); 
  };

  const totalPrice: number = calculateTotal(basket, pricingRules).total;

  const clearBasket = (): void => {
    setBasket([]); 
  };

  return (
    <div>
      <h2>Checkout System</h2>
      <ItemButtons pricingRules={pricingRules} addItem={addItem} />
      <Basket basket={basket} />
      <h3>Total: £{(totalPrice / 100).toFixed(2)}</h3> 
      <button onClick={clearBasket}>
        Clear Basket
      </button>
    </div>
  );
};

export default Checkout;