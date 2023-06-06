import { Module } from '@nestjs/common';
import { UserController } from './User.controller';
import { UserRepository } from './User.repository';

@Module({
  controllers: [UserController],
  providers: [UserRepository],
})
export class UserModule {}
