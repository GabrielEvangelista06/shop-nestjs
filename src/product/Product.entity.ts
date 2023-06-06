import { ProductCharacteristicsDTO } from './dto/ProductCharacteristics.dto';
import { ProductImageDTO } from './dto/ProductImage.dto';

export class ProductEntity {
  id: string;
  userId: string;
  name: string;
  price: number;
  availableQuantity: number;
  description: string;
  characteristics: ProductCharacteristicsDTO[];
  images: ProductImageDTO;
  category: string;
  crated_at: string;
  updated_at: string;
}
