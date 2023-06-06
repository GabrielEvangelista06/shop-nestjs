import { Injectable } from '@nestjs/common';
import { ProductEntity } from './Product.entity';

@Injectable()
export class ProductRepository {
  private products: ProductEntity[] = [];

  async save(product: ProductEntity) {
    this.products.push(product);
  }

  async list() {
    return this.products;
  }

  private getById(id: string) {
    const possibleProduct = this.products.find(
      (savedProduct) => savedProduct.id === id,
    );

    if (!possibleProduct) {
      throw new Error('Produto não encontrado');
    }

    return possibleProduct;
  }

  async update(id: string, data: Partial<ProductEntity>) {
    const prodcut = this.getById(id);

    Object.entries(data).forEach(([key, value]) => {
      if (key === 'id') {
        return;
      }

      prodcut[key] = value;
    });

    return prodcut;
  }

  async delete(id: string) {
    const product = this.getById(id);

    this.products = this.products.filter(
      (savedProduct) => savedProduct.id !== id,
    );

    return product;
  }
}
