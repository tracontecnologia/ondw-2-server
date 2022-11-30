import { PaymentCustomer } from './payment-customer';

describe('PaymentCustomer', () => {
  it('should create a new customer', () => {
    // Arrange
    const customer = new PaymentCustomer({
      name: 'John',
      cpfCnpj: '111.111.111-11',
      externalId: '1',
      id: '1',
    });
    // Assert
    expect(customer).toBeDefined();
    expect(customer.name.length).toEqual(4);
  });
});
