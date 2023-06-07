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
import { ProductService } from './Product.service';
import { CreateProductDTO } from './dto/CreateProduct.dto';
import { ListProductDTO } from './dto/ListProduct.dto';
import { UpdatedProductDTO } from './dto/UpdateProduct.dto';

@Controller('/products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  async createProduct(@Body() productData: CreateProductDTO) {
    const product = new ProductEntity();

    product.id = uuid();
    product.userId = productData.userId;
    product.name = productData.name;
    product.price = productData.price;
    product.availableQuantity = productData.availableQuantity;
    product.description = productData.description;
    product.category = productData.category;
    product.characteristics = productData.characterists;
    product.images = productData.images;

    this.productService.createProduct(product);

    return {
      status: 'ok',
      message: 'Produto criado com sucesso!',
      product: new ListProductDTO(product.id, product.name),
    };
  }

  @Get()
  async listProducts() {
    const savedProducts = await this.productService.listProducts();
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
    const updatedProduct = await this.productService.updateProducts(
      id,
      updatedData,
    );

    return {
      status: 'ok',
      message: 'Produto atualizado com sucesso!',
      product: updatedProduct,
    };
  }

  @Delete('/:id')
  async deleteProduct(@Param('id') id: string) {
    const removedProdcut = await this.productService.deleteProduct(id);

    return {
      status: 'ok',
      message: 'Produto removido com sucesso!',
      product: removedProdcut,
    };
  }
}
