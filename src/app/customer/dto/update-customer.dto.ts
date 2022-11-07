import { IsEmail, IsNotEmpty, MaxLength, Validate } from 'class-validator';
import { CpfCnpjValidator } from '../../../validators/cpfCnpj.validator';

export class UpdateCustomerDto {
  @IsNotEmpty({ message: 'Preencha o nome' })
  @MaxLength(255, { message: 'Tamanho máximo é de 255 caracteres ' })
  name: string;

  @IsNotEmpty({ message: 'Preencha o CPF ou CNPJ' })
  @Validate(CpfCnpjValidator)
  cpfCnpj: string;

  @IsNotEmpty({ message: 'Preencha o e-mail' })
  @IsEmail(undefined, { message: 'Preencha um e-mail válido' })
  @MaxLength(255, { message: 'Tamanho máximo é de 255 caracteres ' })
  email: string;

  @IsNotEmpty({ message: 'Preencha o celular' })
  @MaxLength(255, { message: 'Tamanho máximo é de 255 caracteres ' })
  cellphone: string;
}
