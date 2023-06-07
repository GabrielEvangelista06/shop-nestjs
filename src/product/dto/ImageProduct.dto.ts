import { IsNotEmpty, IsString, IsUUID, IsUrl } from 'class-validator';
import { ManyToMany } from 'typeorm';
import { ProductEntity } from '../Product.entity';

export class ImageProductDTO {
  @IsUUID()
  id: string;

  @IsUrl(undefined, { message: 'URL inválida' })
  url: string;

  @IsString()
  @IsNotEmpty({ message: 'Descrição da imagem é obrigatório' })
  description: string;

  @ManyToMany(() => ProductEntity, (productEntity) => productEntity.images, {
    orphanedRowAction: 'delete',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  product: ProductEntity;
}
