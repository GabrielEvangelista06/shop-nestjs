import { Module } from '@nestjs/common';
import { UserController } from './User.controller';
import { UserRepository } from './User.repository';
import { EmailIsUniqueValidator } from './validator/email-is-unique.validator';

@Module({
  controllers: [UserController],
  providers: [UserRepository, EmailIsUniqueValidator],
})
export class UserModule {}
