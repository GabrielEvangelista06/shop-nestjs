import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ProductEntity } from './Product.entity';

@Entity('product_characteristics')
export class ProductCharacteristicEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'name', length: 100, nullable: false })
  name: string;

  @Column({ name: 'description', length: 100, nullable: false })
  description: string;

  @ManyToMany(() => ProductEntity, (product) => product.characteristics)
  product: ProductEntity;
}
