export interface PricingRule {
    sku: string;
    specialPrice?: number;
    bulkDiscountQuantity?: number;
    bulkDiscountPrice?: number;
  }