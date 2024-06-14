export type StripeProductType = {
  id?: string;
  object?: string;
  active?: boolean;
  created?: number;
  default_price?: string;
  description?: string;
  images?: string[];
  features?: object[];
  livemode?: boolean;
  metadata?: object;
  name: string;
  package_dimensions?: object;
  shippable?: boolean;
  statement_descriptor?: string;
  tax_code?: string;
  unit_label?: string;
  updated?: number;
  url?: string;
};
