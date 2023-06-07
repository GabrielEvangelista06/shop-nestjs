import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductController } from './Product.controller';
import { ProductEntity } from './Product.entity';
import { ProductService } from './Product.service';

@Module({
  imports: [TypeOrmModule.forFeature([ProductEntity])],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}
