import { Injectable } from '@nestjs/common';
import { AsaasPayment } from './asaas/asaas-payment';
import { PaymentInterface } from './payment.interface';

@Injectable()
export class PaymentFactory {
  constructor(private readonly asaasPayment: AsaasPayment) {}

  createAsaasPayment(): PaymentInterface {
    return this.asaasPayment;
  }
}
