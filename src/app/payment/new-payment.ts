import { PaymentTypeEnum } from './payment-type.enum';

export class NewPayment {
  id: string;
  paymentType: PaymentTypeEnum;
  customerId: string;
  value: number;
  dueDate: string;
  description: string;
  pixCode?: string;
  boletoNumber?: string;

  constructor(
    params: Partial<{
      id: string;
      paymentType: PaymentTypeEnum;
      customerId: string;
      value: number;
      dueDate: string;
      description: string;
      pixCode: string;
      boletoNumber: string;
    }> = {},
  ) {
    this.id = params.id;
    this.paymentType = params.paymentType;
    this.customerId = params.customerId;
    this.value = params.value;
    this.dueDate = params.dueDate;
    this.description = params.description;
    this.pixCode = params.pixCode;
    this.boletoNumber = params.boletoNumber;
  }
}
