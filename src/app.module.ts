import { Module } from '@nestjs/common';
import { ProductModule } from './product/ProductModule.module';
import { UserModule } from './user/UserModule.module';

@Module({
  imports: [UserModule, ProductModule],
})
export class AppModule {}
