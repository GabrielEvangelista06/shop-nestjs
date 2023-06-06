import { Body, Controller, Get, Post } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { UserEntity } from './User.entity';
import { UserRepository } from './User.repository';
import { CreateUserDTO } from './dto/CreateUser.dto';
import { ListUserDTO } from './dto/ListUser.dto';

@Controller('/users')
export class UserController {
  constructor(private userRepository: UserRepository) {}

  @Post()
  async createUser(@Body() userData: CreateUserDTO) {
    const user = new UserEntity();

    user.id = uuid();
    user.name = userData.name;
    user.email = userData.email;
    user.password = userData.password;

    this.userRepository.save(user);

    return {
      status: 'ok',
      message: 'Usuário criado com sucesso!',
      user: new ListUserDTO(user.id, user.name),
    };
  }

  @Get()
  async listUsers() {
    const savedUsers = await this.userRepository.list();

    const users = savedUsers.map((user) => new ListUserDTO(user.id, user.name));

    return users;
  }
}
