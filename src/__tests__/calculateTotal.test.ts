import { calculateTotal } from '../utils/calculateTotal'
import { PricingDetails } from "../utils/types"

describe('calculateTotal', () => {
  const pricingDetails: Record<string, PricingDetails> = {
    A: { unitPrice: 50, specialOffer: { quantity: 3, offerPrice: 130 } },
    B: { unitPrice: 30, specialOffer: { quantity: 2, offerPrice: 45 } },
    C: { unitPrice: 20 },
    D: { unitPrice: 15 },
  };
  
    test('Should return 0 for an empty basket', () => {
      const basket: string[] = [];
      const total: number = calculateTotal(basket, pricingDetails);
      expect(total).toBe(0);
    });

    test('Should calculate the total without any special offers', () => {
        const basket: string[] = ['C', 'C', 'D'];
        const total: number = calculateTotal(basket, pricingDetails);
        expect(total).toBe(20 + 20 + 15); 
      });

      test("Should apply special pricing correctly", () => {
        const basketA: string[] = ["A", "A", "A"];
        const totalA: number = calculateTotal(basketA, pricingDetails);
        expect(totalA).toBe(130);

        const basketB: string[] = ["B", "B"];
        const totalB: number = calculateTotal(basketB, pricingDetails);
        expect(totalB).toBe(45);
      });

      test('Should handle a mix of special offers and regular prices', () => {
        const basket: string[] = ['A', 'A', 'A', 'B', 'B', 'C', 'C', 'C'];
        const total: number = calculateTotal(basket, pricingDetails);
        expect(total).toBe(130 + 45 + 20 + 20 + 20); 
      });
})