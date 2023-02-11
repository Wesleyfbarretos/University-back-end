import { Injectable } from '@nestjs/common';
import { users } from '@prisma/client';
import { CreateUserDto } from 'src/dtos/create-user.dto';
import { FindReturn } from 'src/dtos/find-return.dto';
import { UpdateUserDto } from 'src/dtos/update-user.dto';
import { UsersRepository } from '../users-repository';

@Injectable()
export class UsersRepositoryInMemory implements UsersRepository {
  items: users[] = [];

  create(data: CreateUserDto): Promise<users> {
    return null;
  }
  findAll(): Promise<FindReturn[]> {
    throw new Error('Method not implemented.');
  }
  async findOne(id: string): Promise<users> {
    const user = this.items.find((item) => item.id === id);
    return user;
  }
  update(id: string, data: UpdateUserDto): Promise<users> {
    throw new Error('Method not implemented.');
  }
  destroy(id: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
