import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserRepository } from './User.repository';
import { CreateUserDTO } from './dto/CreateUser.dto';

@Controller('/users')
export class UserController {
  constructor(private userRepository: UserRepository) {}

  @Post()
  async createUser(@Body() userData: CreateUserDTO) {
    this.userRepository.save(userData);

    return userData;
  }

  @Get()
  async listUsers() {
    return this.userRepository.list();
  }
}
