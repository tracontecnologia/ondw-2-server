interface Discount {
  value: number;
  dueDateLimitDays: number;
}

interface Fine {
  value: number;
}

interface Interest {
  value: number;
}

export interface AsaasRequestNewPaymentInterface {
  customer: string;
  billingType: string;
  dueDate: string;
  value: number;
  description?: string;
  externalReference?: string;
  discount?: Discount;
  fine?: Fine;
  interest?: Interest;
  postalService?: boolean;
}
