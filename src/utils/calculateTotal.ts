interface SpecialOffer {
    quantity: number;
    offerPrice: number; 
}
  
interface PricingDetails {
    unitPrice: number;
    specialOffer?: SpecialOffer; 
}
  
  export const calculateTotal = (basket: string[], pricingDetails: Record<string, PricingDetails>): number => {
    let total = 0;
    let itemCounts: Record<string, number> = {};
  
    basket.forEach((item) => {
      itemCounts[item] = (itemCounts[item] || 0) + 1;
    });

    for (let item in itemCounts) {
      const itemPricing = pricingDetails[item];
  
      if (!itemPricing) {
        continue; 
      }
  
      const { unitPrice, specialOffer } = itemPricing;
      const count = itemCounts[item];
  
      if (specialOffer) {
        const specialBundles = Math.floor(count / specialOffer.quantity);

        const remainder = count % specialOffer.quantity;

        const specialBundleCost = specialBundles * specialOffer.offerPrice;

        const remainderCost = remainder * unitPrice;

        total += specialBundleCost + remainderCost;
      } else {
        total += count * unitPrice;
      }
    }
  
    return total;
  };
  