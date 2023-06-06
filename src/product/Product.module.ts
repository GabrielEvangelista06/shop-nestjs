import { Module } from '@nestjs/common';
import { ProductController } from './ProductController.controller';
import { ProductRepository } from './ProductRepository.repositoy';

@Module({
  controllers: [ProductController],
  providers: [ProductRepository],
})
export class ProductModule {}
