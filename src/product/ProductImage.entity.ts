import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ProductEntity } from './Product.entity';

@Entity({ name: 'product_images' })
export class ProductImageEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'url', length: 100, nullable: false })
  url: string;

  @Column({ name: 'description', length: 100, nullable: false })
  description: string;

  @ManyToOne(() => ProductEntity, (productEntity) => productEntity.images)
  product: ProductEntity;
}
