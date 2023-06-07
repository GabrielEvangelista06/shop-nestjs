import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './User.controller';
import { UserEntity } from './User.entity';
import { UserService } from './User.service';
import { EmailIsUniqueValidator } from './validator/email-is-unique.validator';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  controllers: [UserController],
  providers: [EmailIsUniqueValidator, UserService],
})
export class UserModule {}
