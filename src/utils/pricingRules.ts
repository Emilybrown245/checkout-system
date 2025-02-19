import { PricingDetails } from "./types";

export const pricingRules: Record<string, PricingDetails> = {
  A: { unitPrice: 50, specialOffer: { quantity: 3, offerPrice: 130 } },
  B: { unitPrice: 30, specialOffer: { quantity: 2, offerPrice: 45 } },
  C: { unitPrice: 20 },
  D: { unitPrice: 15 },
};