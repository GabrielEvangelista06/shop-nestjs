import { IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { ManyToOne } from 'typeorm';
import { ProductEntity } from '../Product.entity';

export class CharacteristicProductDTO {
  @IsUUID()
  id: string;

  @IsString()
  @IsNotEmpty({ message: 'Nome da característica é obrigatório' })
  name: string;

  @IsString()
  @IsNotEmpty({ message: 'Descrição da característica é obrigatório' })
  description: string;

  @ManyToOne(
    () => ProductEntity,
    (productEntity) => productEntity.characteristics,
    { orphanedRowAction: 'delete', onDelete: 'CASCADE', onUpdate: 'CASCADE' },
  )
  product: ProductEntity;
}
