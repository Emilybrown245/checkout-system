export interface SpecialOffer {
    quantity: number;
    offerPrice: number; 
}
  
export interface PricingDetails {
    unitPrice: number;
    specialOffer?: SpecialOffer; 
}