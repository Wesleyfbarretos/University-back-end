import { Injectable } from '@nestjs/common';
import { users } from '@prisma/client';
import { PrismaService } from 'src/database/prisma.service';
import { CreateUserDto } from 'src/dtos/create-user.dto';
import { FindReturn } from 'src/dtos/find-return.dto';
import { UpdateUserDto } from 'src/dtos/update-user.dto';
import { regexHelper } from 'src/helpers/regex.helper';
import { UsersRepository } from '../users-repository';
@Injectable()
export class PrismaUsersRepository implements UsersRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async create(data: CreateUserDto): Promise<users> {
    return this.prismaService.users.create({ data });
  }

  async findAll(): Promise<FindReturn[]> {
    return this.prismaService.users.findMany({
      select: {
        id: true,
        name: true,
        lastName: true,
        email: true,
      },
    });
  }

  async findOne(id: string): Promise<users> {
    return this.prismaService.users.findUnique({
      where: validateEmail(id) ? { email: id } : { id },
    });
  }

  async update(id: string, data: UpdateUserDto): Promise<users> {
    return this.prismaService.users.update({ where: { id }, data });
  }

  async destroy(id: string): Promise<void> {
    await this.prismaService.users.delete({
      where: validateEmail(id) ? { email: id } : { id },
    });
  }
}

function validateEmail(email: string) {
  return String(email).toLowerCase().match(regexHelper.email);
}
