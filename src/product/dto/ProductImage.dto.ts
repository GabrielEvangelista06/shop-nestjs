import { IsNotEmpty, IsString, IsUrl } from 'class-validator';

export class ProductImageDTO {
  @IsUrl(undefined, { message: 'URL inválida' })
  url: string;

  @IsString()
  @IsNotEmpty({ message: 'Descrição da imagem não pode ser vazia' })
  description: string;
}
