import { Module } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';
import { PaymentModule } from '../payment/payment.module';
import { CustomerController } from './customer.controller';
import { CustomerService } from './customer.service';

@Module({
  imports: [PaymentModule],
  controllers: [CustomerController],
  providers: [CustomerService, PrismaService],
})
export class CustomerModule {}
