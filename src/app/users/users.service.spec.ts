import { UsersRepositoryInMemory } from 'src/repositories/in-memory/users-repository-in-memory';
import { UsersService } from './users.service';

describe('UsersService', () => {
  let usersRepositoryInMemory: UsersRepositoryInMemory;
  let usersService: UsersService;

  beforeEach(async () => {
    usersRepositoryInMemory = new UsersRepositoryInMemory();
    usersService = new UsersService(usersRepositoryInMemory);
  });

  it('should be defined', () => {
    usersService.findOne('1');

    expect(usersService.findOne).toHaveBeenCalled();
  });
});
