import { NewPayment } from './new-payment';
import { PaymentCustomer } from './payment-customer';
import { PaymentPlatformEnum } from './payment-platform.enum';
import { PaymentWebHook } from './payment-webhook.interface';

export interface PaymentInterface {
  getPlatform(): PaymentPlatformEnum;
  parseWebHooks(data: any): PaymentWebHook;
  createCustomer(data: PaymentCustomer): Promise<PaymentCustomer>;
  findOneCustomerByDocument(
    cpfCnpj: string,
  ): Promise<PaymentCustomer | undefined>;
  createPayment(data: NewPayment): Promise<NewPayment>;
}
