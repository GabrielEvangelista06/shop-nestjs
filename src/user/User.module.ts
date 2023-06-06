import { Module } from '@nestjs/common';
import { UserController } from './UserController.controller';
import { UserRepository } from './UserRepository.repository';

@Module({
  controllers: [UserController],
  providers: [UserRepository],
})
export class UserModule {}
