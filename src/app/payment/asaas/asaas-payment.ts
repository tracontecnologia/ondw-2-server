import { NewPayment } from '../new-payment';
import { PaymentCustomer } from '../payment-customer';
import { PaymentInterface } from '../payment.interface';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom } from 'rxjs';
import { AsaasNewCustomerInterface } from './asaas-new-customer.interface';
import { Injectable } from '@nestjs/common';
import { AsaasNewPaymentInterface } from './asaas-new-payment.interface';
import { AsaasBoletoInterfae } from './asaas-boleto.interface';
import { AsaasPixInterface } from './asaas-pix.interface';
import { PaymentTypeEnum } from '../payment-type.enum';
import { AsaasPaginateInterface } from './asaas-paginate.interface';
import { AsaasRequestNewPaymentInterface } from './asaas-request-new-payment.interface';

@Injectable()
export class AsaasPayment implements PaymentInterface {
  private readonly baseURL = process.env.ASAAS_API_URL as string;
  private readonly token = process.env.ASAAS_TOKEN as string;

  constructor(private readonly httpService: HttpService) {}

  async createCustomer(newCustomer: PaymentCustomer): Promise<PaymentCustomer> {
    const url = `${this.baseURL}/v3/customers`;
    const config = { headers: this.getHeaders() };
    const { status, data } = await lastValueFrom(
      this.httpService.post<AsaasNewCustomerInterface>(
        url,
        newCustomer,
        config,
      ),
    );
    if (status === 200) {
      return new PaymentCustomer({ ...newCustomer, id: data.id });
    }
  }

  async findOneCustomerByDocument(
    cpfCnpj: string,
  ): Promise<PaymentCustomer | undefined> {
    const url = `${this.baseURL}/v3/customers`;
    const config = { params: { cpfCnpj }, headers: this.getHeaders() };
    const { status, data } = await lastValueFrom(
      this.httpService.get<AsaasPaginateInterface<AsaasNewCustomerInterface>>(
        url,
        config,
      ),
    );
    if (status === 200 && data?.data?.length > 0) {
      const customer = data.data[0];
      return new PaymentCustomer({
        id: customer.id,
        name: customer.name,
        cpfCnpj: customer.cpfCnpj,
      });
    }
  }

  async createPayment(newPayment: NewPayment): Promise<NewPayment> {
    const url = `${this.baseURL}/v3/payments`;
    const config = { headers: this.getHeaders() };
    const body: AsaasRequestNewPaymentInterface = {
      customer: newPayment.customerId,
      billingType: newPayment.paymentType,
      dueDate: newPayment.dueDate,
      description: newPayment.description,
      value: newPayment.value,
    };
    const { status, data } = await lastValueFrom(
      this.httpService.post<AsaasNewPaymentInterface>(url, body, config),
    );
    if (status === 200) {
      const result = new NewPayment({ ...newPayment, id: data.id });

      switch (newPayment.paymentType) {
        case PaymentTypeEnum.BOLETO:
          result.boletoNumber = await this.getBoletoNumber(data.id);
          break;
        case PaymentTypeEnum.PIX:
        case PaymentTypeEnum.BOLETO:
          result.pixCode = await this.getPixCode(data.id);
          break;
      }

      return result;
    }
  }

  private async getBoletoNumber(id: string): Promise<string> {
    const url = `${this.baseURL}/v3/payments/${id}/identificationField`;
    const config = { headers: this.getHeaders() };
    const { status, data } = await lastValueFrom(
      this.httpService.get<AsaasBoletoInterfae>(url, config),
    );
    if (status === 200) {
      return data.barCode;
    }
  }

  private async getPixCode(id: string): Promise<string> {
    const url = `${this.baseURL}/v3/payments/${id}/pixQrCode`;
    const config = { headers: this.getHeaders() };
    const { status, data } = await lastValueFrom(
      this.httpService.get<AsaasPixInterface>(url, config),
    );
    if (status === 200) {
      return data.payload;
    }
  }

  private getHeaders() {
    return {
      'Content-Type': 'application/json',
      access_token: this.token,
    };
  }
}
