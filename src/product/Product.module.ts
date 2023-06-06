import { Module } from '@nestjs/common';
import { ProductController } from './Product.controller';
import { ProductRepository } from './Product.repositoy';

@Module({
  controllers: [ProductController],
  providers: [ProductRepository],
})
export class ProductModule {}
