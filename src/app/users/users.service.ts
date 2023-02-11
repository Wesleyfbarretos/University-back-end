import { Injectable } from '@nestjs/common';
import { users } from '@prisma/client';
import { hashSync } from 'bcrypt';
import { CreateUserDto } from 'src/dtos/create-user.dto';
import { FindReturn } from 'src/dtos/find-return.dto';
import { UpdateUserDto } from 'src/dtos/update-user.dto';
import { BadRequestError } from 'src/helpers/api-errors.helper';
import { messagesHelper } from 'src/helpers/messages.helper';
import { UsersRepository } from 'src/repositories/users-repository';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async create(data: CreateUserDto): Promise<users> {
    const user = await this.findOne(data.email);

    if (user) {
      throw new BadRequestError(messagesHelper.EMAIL_ALREADY_EXIST);
    }

    data.password = hashSync(data.password, 10);
    return this.usersRepository.create(data);
  }

  async findAll(): Promise<FindReturn[]> {
    return this.usersRepository.findAll();
  }

  async findOne(id: string): Promise<users> {
    return this.usersRepository.findOne(id);
  }

  async update(id: string, data: UpdateUserDto): Promise<users> {
    return this.usersRepository.update(id, data);
  }

  async destroy(id: string): Promise<void> {
    await this.usersRepository.destroy(id);
  }
}
