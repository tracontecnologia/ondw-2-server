import { BillingStatusEnum } from '../billing/enum/billing-status.enum';

export interface PaymentWebHook {
  id: string;
  status: BillingStatusEnum;
  value: number;
}
