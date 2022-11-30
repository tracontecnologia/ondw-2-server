import { HttpService } from '@nestjs/axios';
import { TestingModule, Test } from '@nestjs/testing';
import { of } from 'rxjs';
import { NewPayment } from '../new-payment';
import { PaymentCustomer } from '../payment-customer';
import { PaymentTypeEnum } from '../payment-type.enum';
import { AsaasPayment } from './asaas-payment';

describe('AsaasPayment', () => {
  let httpService: HttpService;
  let asaasPayment: AsaasPayment;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AsaasPayment,
        {
          provide: HttpService,
          useValue: {
            get: jest.fn(),
            post: jest.fn(),
          },
        },
      ],
    }).compile();

    httpService = module.get<HttpService>(HttpService);
    asaasPayment = module.get<AsaasPayment>(AsaasPayment);
  });

  it('should create a new customer', async () => {
    // Arrange
    jest.spyOn(httpService, 'post').mockReturnValueOnce(
      of({
        status: 200,
        data: { id: 'cus_123', name: 'John', cpfCnpj: '111.111.111-11' },
      } as any),
    );
    const data = new PaymentCustomer({
      name: 'John',
      cpfCnpj: '111.111.111-11',
    });
    // Act
    const customer = await asaasPayment.createCustomer(data);
    // Assert
    expect(customer).toBeDefined();
    expect(customer.id).toBeDefined();
  });

  it('should find one customer by document', async () => {
    // Arrange
    jest.spyOn(httpService, 'get').mockReturnValueOnce(
      of({
        status: 200,
        data: {
          data: [{ id: 'cus_123', name: 'John', cpfCnpj: '111.111.111-11' }],
        },
      } as any),
    );
    const document = '111.111.111-11';
    // Act
    const result = await asaasPayment.findOneCustomerByDocument(document);
    // Assert
    expect(result).toBeDefined();
    expect(result.id).toBeDefined();
    expect(result.name).toBeDefined();
    expect(result.cpfCnpj).toBeDefined();
  });

  it('should create a new payment', async () => {
    // Arrange
    jest.spyOn(httpService, 'post').mockReturnValueOnce(
      of({
        status: 200,
        data: {
          id: 'pay_123',
          customerId: 'cus_123',
          description: 'Software development services',
          dueDate: '2022-12-01',
          paymentType: 'PIX',
          value: 8000,
        },
      } as any),
    );
    jest.spyOn(httpService, 'get').mockReturnValueOnce(
      of({
        status: 200,
        data: {
          payload:
            '00020101021226730014br.gov.bcb.pix2551pix-h.asaas.com/pixqrcode/cobv/pay_76575613967995145204000053039865802BR5905ASAAS6009Joinville61088922827162070503***63045E7A',
        },
      } as any),
    );
    const data = new NewPayment({
      customerId: 'cus_123',
      description: 'Software development services',
      dueDate: '2022-12-01',
      paymentType: PaymentTypeEnum.PIX,
      value: 8000,
    });
    // Act
    const newPayment = await asaasPayment.createPayment(data);
    // Assert
    expect(newPayment).toBeDefined();
    expect(newPayment.id).toBeDefined();
    expect(newPayment.pixCode).toBeDefined();
  });
});
