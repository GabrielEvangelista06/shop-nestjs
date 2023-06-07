import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './User.entity';
import { ListUserDTO } from './dto/ListUser.dto';
import { UpdateUserDTO } from './dto/UpdateUser.dto copy';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async createUser(user: UserEntity) {
    await this.userRepository.save(user);
  }

  async listUsers() {
    const savedUsers = await this.userRepository.find();
    const users = savedUsers.map((user) => new ListUserDTO(user.id, user.name));

    return users;
  }

  async updateUser(id: string, user: UpdateUserDTO) {
    await this.userRepository.update(id, user);
  }

  async deleteUser(id: string) {
    await this.userRepository.delete(id);
  }

  async existingEmail(email: string) {
    const checkEmail = await this.userRepository.findOne({
      where: { email },
    });

    return checkEmail;
  }
}
