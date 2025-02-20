import { PricingDetails, CalculationResult } from "./types"

  export const calculateBasketTotal = (basket: string[], pricingDetails: Record<string, PricingDetails>): CalculationResult => {
    let total = 0;
    let itemCounts: Record<string, number> = {};
    let offersApplied: string[] = [];
  
    basket.forEach((item) => {
      itemCounts[item] = (itemCounts[item] || 0) + 1;
    });

    for (let item in itemCounts) {
      const itemPricing = pricingDetails[item];
  
      const { unitPrice, specialOffer } = itemPricing;
      const count = itemCounts[item];
  
      if (specialOffer) {
        const specialBundles = Math.floor(count / specialOffer.quantity);

        const remainder = count % specialOffer.quantity;

        const specialBundleCost = specialBundles * specialOffer.offerPrice;

        const remainderCost = remainder * unitPrice;

        total += specialBundleCost + remainderCost;

        if (specialBundles > 0) {
          offersApplied.push( `SpecialOffer: ${specialOffer.quantity} of ${item} for £${(specialOffer.offerPrice / 100).toFixed(2)}`);
        }
      } else {
        total += count * unitPrice;
      }
    }
  
    return {
      total,
    offersApplied
  }
  };
  