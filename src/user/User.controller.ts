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
import { UserService } from './User.service';
import { CreateUserDTO } from './dto/CreateUser.dto';
import { ListUserDTO } from './dto/ListUser.dto';
import { UpdateUserDTO } from './dto/UpdateUser.dto copy';

@Controller('/users')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  async createUser(@Body() userData: CreateUserDTO) {
    const user = new UserEntity();

    user.id = uuid();
    user.name = userData.name;
    user.email = userData.email;
    user.password = userData.password;

    this.userService.createUser(user);

    return {
      status: 'ok',
      message: 'Usuário criado com sucesso!',
      user: new ListUserDTO(user.id, user.name),
    };
  }

  @Get()
  async listUsers() {
    const users = await this.userService.listUsers();

    return users;
  }

  @Put('/:id')
  async updateUser(
    @Param('id') id: string,
    @Body() updatedData: UpdateUserDTO,
  ) {
    const updatedUser = await this.userService.updateUser(id, updatedData);

    return {
      status: 'ok',
      message: 'Usuário atualizado com sucesso!',
      user: updatedUser,
    };
  }

  @Delete('/:id')
  async deleteUser(@Param('id') id: string) {
    const removedUser = await this.userService.deleteUser(id);

    return {
      status: 'ok',
      message: 'Usuário removido com sucesso!',
      user: removedUser,
    };
  }
}
