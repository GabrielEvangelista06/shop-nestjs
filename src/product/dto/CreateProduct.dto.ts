import {
  IsNotEmpty,
  IsNumber,
  IsString,
  IsUUID,
  MaxLength,
  Min,
} from 'class-validator';

export class CreateProductDTO {
  @IsUUID(undefined, { message: 'ID do usuário é inváilido' })
  userId: string;

  @IsString()
  @IsNotEmpty({ message: 'Nome do produto não pode ser vazio' })
  name: string;

  @IsNumber({ maxDecimalPlaces: 2, allowNaN: false, allowInfinity: false })
  @Min(1, { message: 'O valor precisa ser maior que zero' })
  price: number;

  @IsNumber()
  @Min(0, { message: 'Quantidade mínima inválida' })
  availableQuantity: number;

  @IsString()
  @IsNotEmpty({ message: 'Descrição do produto não pode ser vazia ' })
  @MaxLength(1000, {
    message: 'Descrição não pode ter mais que 1000 caracteres',
  })
  description: string;

  @IsString()
  @IsNotEmpty({ message: 'Categoria do produto não pode ser vazia' })
  category: string;

  @IsString()
  @IsNotEmpty()
  created_at: string;

  @IsString()
  @IsNotEmpty()
  updated_at: string;
}
