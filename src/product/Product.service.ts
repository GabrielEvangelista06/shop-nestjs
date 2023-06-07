import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductEntity } from './Product.entity';
import { ListProductDTO } from './dto/ListProduct.dto';
import { UpdatedProductDTO } from './dto/UpdateProduct.dto copy';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(ProductEntity)
    private readonly productRepository: Repository<ProductEntity>,
  ) {}

  async createProduct(product: ProductEntity) {
    await this.productRepository.save(product);
  }

  async listProducts() {
    const savedProducts = await this.productRepository.find();
    const products = savedProducts.map(
      (product) => new ListProductDTO(product.id, product.name),
    );

    return products;
  }

  async updateProducts(id: string, product: UpdatedProductDTO) {
    const existingProduct = await this.existingProduct(id);

    if (existingProduct) {
      await this.productRepository.update(id, product);
    } else {
      throw new Error('O produto não existe');
    }
  }

  async deleteProduct(id: string) {
    await this.productRepository.delete(id);
  }

  private async existingProduct(id: string) {
    const product = await this.productRepository.findOneBy({ id });

    let existingProduct = true;

    if (!product) {
      existingProduct = false;
      return;
    }

    return existingProduct;
  }
}
