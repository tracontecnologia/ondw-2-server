import { AsaasWebHookEventEnum } from './asaas-webhook-event.enum';

interface CreditCard {
  creditCardNumber: string;
  creditCardBrand: string;
  creditCardToken: string;
}

interface Discount {
  value: number;
  dueDateLimitDays: number;
  type: string;
}

interface Fine {
  value: number;
  type: string;
}

interface Interest {
  value: number;
  type: string;
}

interface Split {
  walletId: string;
  fixedValue: number;
  percentualValue?: number;
}

interface Chargeback {
  status: string;
  reason: string;
}

interface Payment {
  object: string;
  id: string;
  dateCreated: string;
  customer: string;
  subscription: string;
  installment: string;
  paymentLink: string;
  dueDate: string;
  originalDueDate: string;
  value: number;
  netValue: number;
  originalValue?: any;
  interestValue?: any;
  description: string;
  externalReference: string;
  billingType: string;
  status: string;
  pixTransaction?: any;
  confirmedDate: string;
  paymentDate: string;
  clientPaymentDate: string;
  installmentNumber?: any;
  creditDate: string;
  estimatedCreditDate: string;
  invoiceUrl: string;
  bankSlipUrl?: any;
  transactionReceiptUrl: string;
  invoiceNumber: string;
  deleted: boolean;
  anticipated: boolean;
  anticipable: boolean;
  lastInvoiceViewedDate: string;
  lastBankSlipViewedDate?: any;
  postalService: boolean;
  creditCard: CreditCard;
  discount: Discount;
  fine: Fine;
  interest: Interest;
  split: Split[];
  chargeback: Chargeback;
  refunds?: any;
}

export interface AsaasWebHookInterface {
  event: AsaasWebHookEventEnum;
  payment: Payment;
}
