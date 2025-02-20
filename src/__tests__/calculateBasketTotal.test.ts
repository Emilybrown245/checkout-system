import { calculateBasketTotal } from '../utils/calculateBasketTotal'
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
      const total: number = calculateBasketTotal(basket, pricingDetails).total;
      expect(total).toBe(0);
    });

    test('Should calculate the total without any special offers', () => {
        const basket: string[] = ['C', 'C', 'D'];
        const total: number = calculateBasketTotal(basket, pricingDetails).total;
        expect(total).toBe(20 + 20 + 15); 
      });

      test("Should apply special pricing correctly", () => {
        const basketA: string[] = ["A", "A", "A"];
        const totalA: number = calculateBasketTotal(basketA, pricingDetails).total;
        expect(totalA).toBe(130);

        const basketB: string[] = ["B", "B"];
        const totalB: number = calculateBasketTotal(basketB, pricingDetails).total;
        expect(totalB).toBe(45);
      });

      test('Should handle a mix of special offers and regular prices', () => {
        const basket: string[] = ['A', 'A', 'A', 'B', 'B', 'C', 'C', 'C'];
        const total: number = calculateBasketTotal(basket, pricingDetails).total;
        expect(total).toBe(130 + 45 + 20 + 20 + 20); 
      });

      test('Should correctly apply special offers when items are not adjacent', () => {
        const basket: string[] = ['A', 'B', 'C', 'A', 'B', 'A']; 
        const { total, offersApplied } = calculateBasketTotal(basket, pricingDetails);
    
        expect(total).toBe(130 + 45 + 20);
        
        expect(offersApplied).toContain("SpecialOffer: 3 of A for £1.30");
        expect(offersApplied).toContain("SpecialOffer: 2 of B for £0.45");
      });
    });
