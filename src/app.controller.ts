import { Body, Controller, Param, Post } from '@nestjs/common';
import { Get } from '@nestjs/common/decorators/http/request-mapping.decorator';
import { Student } from '@prisma/client';
import { AppService } from './app.service';
import { StudentBody } from './dtos/student-body';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('create')
  async create(@Body() body: StudentBody): Promise<void> {
    const { name, email } = body;

    await this.appService.create(name, email);
  }

  @Get('students')
  async get(): Promise<Student[]> {
    const students = await this.appService.get();

    return students;
  }

  @Get('/:query')
  async getOne(@Param('query') query: string): Promise<Student> {
    const student = await this.appService.getOne(query);

    return student;
  }
}
