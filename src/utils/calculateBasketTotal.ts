import { PricingDetails, CalculationResult } from "./types";

export const calculateBasketTotal = (
  basket: string[],
  pricingDetails: Record<string, PricingDetails>
): CalculationResult => {
  let total = 0;
  let itemCounts: Record<string, number> = {};
  let offersApplied: string[] = [];

  basket.forEach((item) => {
    const itemDetails = pricingDetails[item];

    if (!itemDetails) {
      console.warn(`Item "${item}" not found in pricingDetails.`);
      return; 
    }

    const { unitPrice, specialOffer } = itemDetails;

    if (specialOffer) {
      if (!specialOffer.quantity || !specialOffer.offerPrice || specialOffer.quantity <= 0) {
        console.error(`Invalid special offer for "${item}":`, specialOffer);
        return; 
      }

      itemCounts[item] = (itemCounts[item] || 0) + 1;

      if (itemCounts[item] % specialOffer.quantity === 0) {
        total -= (specialOffer.quantity - 1) * unitPrice; 
        total += specialOffer.offerPrice; 

        const offerInPounds = (specialOffer.offerPrice / 100).toFixed(2);

        offersApplied.push(
          `Special offer: ${specialOffer.quantity} of ${item} for £${offerInPounds}`
        );
      }
    }
    if (!specialOffer || itemCounts[item] % specialOffer.quantity !== 0) {
      total += unitPrice;
    }
  });

  return {
    total,
    offersApplied, 
  };
};

  