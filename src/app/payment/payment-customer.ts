export class PaymentCustomer {
  id: string;
  name: string;
  cpfCnpj: string;

  constructor(
    params: Partial<{
      id: string;
      name: string;
      cpfCnpj: string;
    }> = {},
  ) {
    this.id = params.id;
    this.name = params.name;
    this.cpfCnpj = params.cpfCnpj;
  }
}
