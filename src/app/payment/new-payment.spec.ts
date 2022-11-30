import { NewPayment } from './new-payment';
import { PaymentTypeEnum } from './payment-type.enum';

describe('NewPayment', () => {
  it('should create a new payment', () => {
    // Arrange
    const newPayment = new NewPayment({
      customerId: 'cus_123',
      description: 'Software development',
      dueDate: '2022-11-01',
      paymentType: PaymentTypeEnum.PIX,
      value: 8000,
    });
    // Assert
    expect(newPayment).toBeDefined();
    expect(newPayment.customerId).toBeDefined();
    expect(newPayment.description).toBeDefined();
    expect(newPayment.dueDate).toBeDefined();
    expect(newPayment.paymentType).toBeDefined();
    expect(newPayment.value).toBeDefined();
  });
});
