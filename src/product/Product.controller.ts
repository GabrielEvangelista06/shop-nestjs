import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { ProductEntity } from './Product.entity';
import { ProductRepository } from './Product.repositoy';
import { CreateProductDTO } from './dto/CreateProduct.dto';
import { ListProductDTO } from './dto/ListProduct.dto';
import { UpdatedProductDTO } from './dto/UpdateProduct.dto copy';

@Controller('/products')
export class ProductController {
  constructor(private productRepository: ProductRepository) {}

  @Post()
  async createProduct(@Body() productData: CreateProductDTO) {
    const product = new ProductEntity();

    product.id = uuid();
    product.userId = productData.userID;
    product.name = productData.name;
    product.price = productData.price;
    product.availableQuantity = productData.availableQuantity;
    product.description = productData.description;
    // product.characteristics = productData.characteristics;
    // product.images = productData.images;
    product.category = productData.category;

    this.productRepository.save(product);

    return {
      status: 'ok',
      message: 'Produto criado com sucesso!',
      product: new ListProductDTO(product.id, product.name),
    };
  }

  @Get()
  async listProducts() {
    const savedProducts = await this.productRepository.list();
    const products = savedProducts.map(
      (product) => new ListProductDTO(product.id, product.name),
    );

    return { status: 'ok', products };
  }

  @Put('/:id')
  async updateProduct(
    @Param('id') id: string,
    @Body() updatedData: UpdatedProductDTO,
  ) {
    const updatedProduct = await this.productRepository.update(id, updatedData);

    return {
      status: 'ok',
      message: 'Produto atualizado com sucesso!',
      product: updatedProduct,
    };
  }

  @Delete('/:id')
  async deleteProduct(@Param('id') id: string) {
    const removedProdcut = await this.productRepository.delete(id);

    return {
      status: 'ok',
      message: 'Produto removido com sucesso!',
      product: removedProdcut,
    };
  }
}
