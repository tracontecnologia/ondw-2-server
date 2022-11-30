import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';
import { PaymentCustomer } from '../payment/payment-customer';
import { PaymentFactory } from '../payment/payment-factory';
import { PaymentInterface } from '../payment/payment.interface';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';

@Injectable()
export class CustomerService {
  private readonly payment: PaymentInterface;

  constructor(
    private readonly prismaService: PrismaService,
    private readonly paymentFactory: PaymentFactory,
  ) {
    this.payment = this.paymentFactory.createAsaasPayment();
  }

  async findAll() {
    return this.prismaService.customer.findMany({
      select: {
        id: true,
        name: true,
        cpfCnpj: true,
        email: true,
        cellphone: true,
        externalId: true,
      },
      where: {
        deletedAt: null,
      },
    });
  }

  async createNew(data: CreateCustomerDto, userId: string) {
    try {
      const externalId = await this.findOneOrCreateAnExternalCustomer(data);
      return await this.prismaService.customer.create({
        data: {
          ...data,
          externalId,
          user: { connect: { id: userId } },
        },
      });
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async findOneById(id: string) {
    try {
      return await this.prismaService.customer.findFirstOrThrow({
        select: {
          id: true,
          name: true,
          cpfCnpj: true,
          email: true,
          cellphone: true,
          externalId: true,
        },
        where: { id, deletedAt: null },
      });
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  async updateById(id: string, data: UpdateCustomerDto) {
    await this.findOneById(id);
    return await this.prismaService.customer.update({
      where: { id },
      data: { ...data, updatedAt: new Date() },
    });
  }

  async deleteById(id: string) {
    await this.findOneById(id);
    await this.prismaService.customer.update({
      where: { id },
      data: { deletedAt: new Date() },
    });
  }

  async findOneOrCreateAnExternalCustomer(
    data: CreateCustomerDto,
  ): Promise<string> {
    let paymentCustomer = await this.payment.findOneCustomerByDocument(
      data.cpfCnpj,
    );
    if (!paymentCustomer) {
      const externalCustomer = new PaymentCustomer({
        name: data.name,
        cpfCnpj: data.cpfCnpj,
      });
      paymentCustomer = await this.payment.createCustomer(externalCustomer);
    }
    const externalId = paymentCustomer.id;
    return externalId;
  }
}
