import { NewPayment } from './new-payment';
import { PaymentCustomer } from './payment-customer';

export interface PaymentInterface {
  createCustomer(data: PaymentCustomer): Promise<PaymentCustomer>;
  findOneCustomerByDocument(
    cpfCnpj: string,
  ): Promise<PaymentCustomer | undefined>;
  createPayment(data: NewPayment): Promise<NewPayment>;
}
