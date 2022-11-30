import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { PaymentFactory } from './payment-factory';
import { AsaasPayment } from './asaas/asaas-payment';

@Module({
  imports: [HttpModule],
  providers: [PaymentFactory, AsaasPayment],
  exports: [PaymentFactory],
})
export class PaymentModule {}
