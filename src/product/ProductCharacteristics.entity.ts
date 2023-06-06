import { Column, Entity } from 'typeorm';

@Entity('product_characteristics')
export class ProductCharacteristicEntity {
  @Column({ name: 'name', length: 100, nullable: false })
  name: string;

  @Column({ name: 'description', length: 100, nullable: false })
  description: string;
}
