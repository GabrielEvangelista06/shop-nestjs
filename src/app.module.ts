import { Module } from '@nestjs/common';
import { ProductModule } from './product/Product.module';
import { UserModule } from './user/User.module';

@Module({
  imports: [UserModule, ProductModule],
})
export class AppModule {}
