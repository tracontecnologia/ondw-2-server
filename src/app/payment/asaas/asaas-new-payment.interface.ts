export interface Discount {
  value: number;
  dueDateLimitDays: number;
}

export interface Fine {
  value: number;
}

export interface Interest {
  value: number;
}

export interface AsaasNewPaymentInterface {
  object: string;
  id: string;
  dateCreated: string;
  customer: string;
  paymentLink?: any;
  dueDate: string;
  value: number;
  netValue: number;
  billingType: string;
  canBePaidAfterDueDate: boolean;
  pixTransaction?: any;
  status: string;
  description: string;
  externalReference: string;
  originalValue?: any;
  interestValue?: any;
  originalDueDate: string;
  paymentDate?: any;
  clientPaymentDate?: any;
  installmentNumber?: any;
  transactionReceiptUrl?: any;
  nossoNumero: string;
  invoiceUrl: string;
  bankSlipUrl: string;
  invoiceNumber: string;
  discount: Discount;
  fine: Fine;
  interest: Interest;
  deleted: boolean;
  postalService: boolean;
  anticipated: boolean;
  anticipable: boolean;
  refunds?: any;
}
