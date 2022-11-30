import { Module } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';
import { PaymentModule } from '../payment/payment.module';
import { BillingController } from './billing.controller';
import { BillingService } from './billing.service';

@Module({
  imports: [PaymentModule],
  controllers: [BillingController],
  providers: [BillingService, PrismaService],
})
export class BillingModule {}
