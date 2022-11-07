import { IsEmail, IsNotEmpty, MaxLength } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty({ message: 'Preencha o nome' })
  @MaxLength(255, { message: 'Tamanho máximo é de 255 caracteres ' })
  firstName: string;

  @IsNotEmpty({ message: 'Preencha o sobrenome' })
  @MaxLength(255, { message: 'Tamanho máximo é de 255 caracteres ' })
  lastName: string;

  @IsEmail(undefined, { message: 'Informe um e-mail válido' })
  @IsNotEmpty({ message: 'Preencha o email' })
  @MaxLength(255, { message: 'Tamanho máximo é de 255 caracteres ' })
  email: string;

  @IsNotEmpty({ message: 'Preencha a senha' })
  @MaxLength(255, { message: 'Tamanho máximo é de 255 caracteres ' })
  password: string;
}
