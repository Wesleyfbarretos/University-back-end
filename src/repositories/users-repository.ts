import { users } from '@prisma/client';
import { CreateUserDto } from 'src/dtos/create-user.dto';
import { FindReturn } from 'src/dtos/find-return.dto';
import { UpdateUserDto } from 'src/dtos/update-user.dto';

export abstract class UsersRepository {
  abstract create(data: CreateUserDto): Promise<users>;
  abstract findAll(): Promise<FindReturn[]>;
  abstract findOne(id: string): Promise<users>;
  abstract update(id: string, data: UpdateUserDto): Promise<users>;
  abstract destroy(id: string): Promise<void>;
}
