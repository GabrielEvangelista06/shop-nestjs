import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { UserEntity } from './User.entity';
import { UserRepository } from './User.repository';
import { CreateUserDTO } from './dto/CreateUser.dto';
import { ListUserDTO } from './dto/ListUser.dto';
import { UpdateUserDTO } from './dto/UpdateUser.dto copy';

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

  @Put('/:id')
  async updateUser(@Param('id') id: string, @Body() updateData: UpdateUserDTO) {
    const updatedUser = await this.userRepository.update(id, updateData);

    return {
      status: 'ok',
      message: 'Usuário atualizado com sucesso!',
      user: updatedUser,
    };
  }

  @Delete('/:id')
  async deleteUser(@Param('id') id: string) {
    const removedUser = await this.userRepository.delete(id);

    return {
      status: 'ok',
      message: 'Usuário removido com sucesso!',
      user: removedUser,
    };
  }
}
