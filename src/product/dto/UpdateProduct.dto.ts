import { Optional } from '@nestjs/common';
import { Type } from 'class-transformer';
import {
  ArrayMinSize,
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsString,
  IsUUID,
  MaxLength,
  Min,
  ValidateNested,
} from 'class-validator';
import { CharacteristicProductDTO } from './CharacteristicProduct.dto';
import { ImageProductDTO } from './ImageProduct.dto';

export class UpdatedProductDTO {
  @IsUUID(undefined, { message: 'ID do usuário é inváilido' })
  @Optional()
  userId: string;

  @IsString()
  @IsNotEmpty({ message: 'Nome do produto não pode ser vazio' })
  @Optional()
  name: string;

  @IsNumber({ maxDecimalPlaces: 2, allowNaN: false, allowInfinity: false })
  @Min(1, { message: 'O valor precisa ser maior que zero' })
  @Optional()
  price: number;

  @IsNumber()
  @Min(0, { message: 'Quantidade mínima inválida' })
  @Optional()
  availableQuantity: number;

  @IsString()
  @IsNotEmpty({ message: 'Descrição do produto não pode ser vazia ' })
  @MaxLength(1000, {
    message: 'Descrição não pode ter mais que 1000 caracteres',
  })
  @Optional()
  description: string;

  @ValidateNested()
  @IsArray()
  @ArrayMinSize(2)
  @Type(() => CharacteristicProductDTO)
  characterists: CharacteristicProductDTO[];

  @ValidateNested()
  @IsArray()
  @ArrayMinSize(1)
  @Type(() => ImageProductDTO)
  images: ImageProductDTO[];

  @IsString()
  @IsNotEmpty({ message: 'Categoria do produto não pode ser vazia' })
  @Optional()
  category: string;

  @IsString()
  @IsNotEmpty()
  @Optional()
  created_at: string;

  @IsString()
  @IsNotEmpty()
  @Optional()
  updated_at: string;
}
