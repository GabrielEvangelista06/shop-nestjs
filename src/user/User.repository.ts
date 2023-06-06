import { Injectable } from '@nestjs/common';
import { UserEntity } from './User.entity';

@Injectable()
export class UserRepository {
  private users: UserEntity[] = [];

  async save(user: UserEntity) {
    this.users.push(user);
  }

  async list() {
    return this.users;
  }

  async existingEmail(email: string) {
    const possibleUser = this.users.find((user) => user.email === email);

    return possibleUser !== undefined;
  }

  private getById(id: string) {
    const possibleUser = this.users.find((savedUser) => savedUser.id === id);

    if (!possibleUser) {
      throw new Error('Usuário não encontrado');
    }

    return possibleUser;
  }

  async update(id: string, data: Partial<UserEntity>) {
    const user = this.getById(id);

    Object.entries(data).forEach(([key, value]) => {
      if (key === 'id') {
        return;
      }

      user[key] = value;
    });

    return user;
  }

  async delete(id: string) {
    const user = this.getById(id);

    this.users = this.users.filter((savedUser) => savedUser.id !== id);

    return user;
  }
}
