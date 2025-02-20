import { PricingDetails, CalculationResult } from "./types"

  export const calculateBasketTotal = (basket: string[], pricingDetails: Record<string, PricingDetails>): CalculationResult => {
    let total = 0;
    let itemCounts: Record<string, number> = {};
    let offersApplied: string[] = [];
  
    basket.forEach((item) => {
      if (!pricingDetails[item]) return; 

      itemCounts[item] = (itemCounts[item] || 0) + 1;
      const { unitPrice, specialOffer } = pricingDetails[item];

      if (specialOffer && itemCounts[item] % specialOffer.quantity === 0) {

        total -= (specialOffer.quantity - 1) * unitPrice; 

        total += specialOffer.offerPrice;

        offersApplied.push(
          `SpecialOffer: ${specialOffer.quantity} of ${item} for £${(specialOffer.offerPrice / 100).toFixed(2)}`
        );
      } else {
        total += unitPrice;
      }
    })
  
    return {
      total,
    offersApplied
  }
  };
  