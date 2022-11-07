import { Type } from 'class-transformer';
import {
  IsDateString,
  IsNotEmpty,
  IsUUID,
  MaxLength,
  Min,
} from 'class-validator';

export class UpdateBillingDto {
  @IsNotEmpty({ message: 'Preencha a descrição' })
  @MaxLength(255, { message: 'Tamanho máximo é de 255 caracteres ' })
  description: string;

  @IsNotEmpty({ message: 'Preencha o valor' })
  @Type(() => Number)
  @Min(1, { message: 'O valor minímo é 1' })
  value: number;

  @IsNotEmpty({ message: 'Preencha uma data de vencimento' })
  @IsDateString(undefined, { message: 'Preencha uma data válida' })
  dueDate: string;

  @IsNotEmpty({ message: 'Selecione um cliente' })
  @IsUUID('4', { message: 'O id do cliente é inválido' })
  customerId: string;
}
