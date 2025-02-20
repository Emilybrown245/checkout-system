export interface SpecialOffer {
    quantity: number;
    offerPrice: number; 
}
  
export interface PricingDetails {
    unitPrice: number;
    specialOffer?: SpecialOffer; 
}

export interface BasketProps {
    basket: string[];
  }

  export interface ItemButtonsProps {
    pricingRules: Record<string, PricingDetails >;
    addItem: (item: string) => void;
  }

  export interface CheckoutProps {
    pricingRules: Record<string, PricingDetails>;
  }


export interface CalculationResult {
    total: number;
    offersApplied: string[];
  }

  export interface HistoryState {
    basket: string[];
    total: number;
    offersApplied: string[];
  }