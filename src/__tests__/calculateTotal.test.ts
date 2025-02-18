import { calculateTotal } from '../utils/calculateTotal'

describe('calculateTotal', () => {
    const pricingDetails = {
      A: { unitPrice: 50, specialOffer: { quantity: 3, offerPrice: 130 } },
      B: { unitPrice: 30, specialOffer: { quantity: 2, offerPrice: 45 } },
      C: { unitPrice: 20 },
      D: { unitPrice: 15 },
    };
  
    test('Should return 0 for an empty basket', () => {
      const basket: string[] = [];
      const total = calculateTotal(basket, pricingDetails);
      expect(total).toBe(0);
    });

    test('Should calculate the total without any special offers', () => {
        const basket = ['C', 'C', 'D'];
        const total = calculateTotal(basket, pricingDetails);
        expect(total).toBe(20 + 20 + 15); 
      });

      test('Should handle a mix of special offers and regular prices', () => {
        const basket = ['A', 'A', 'A', 'B', 'B', 'C', 'C', 'C'];
        const total = calculateTotal(basket, pricingDetails);
        expect(total).toBe(130 + 45 + 20 + 20 + 20); 
      });

      test('Should handle an item without a pricing rule', () => {
        const basket = ['A', 'B', 'X']; 
        const total = calculateTotal(basket, pricingDetails);
        expect(total).toBe(50 + 30); // Should ignore 'X' and return the total of A and B 
      });
})