import { Injectable } from '@nestjs/common/decorators/core/injectable.decorator';
import { Student } from '@prisma/client';
import { QueryStudent } from 'src/app.service';
import { PrismaService } from 'src/database/prisma.service';
import { StudentRepository } from '../student-repository';

@Injectable()
export class PrismaStudentRepository implements StudentRepository {
  constructor(private prisma: PrismaService) {}

  async create(name: string, email: string): Promise<void> {
    await this.prisma.student.create({
      data: {
        name,
        email,
      },
    });
  }

  async get(): Promise<Student[]> {
    return await this.prisma.student.findMany();
  }

  async getOne(query: QueryStudent): Promise<Student> {
    return await this.prisma.student.findUnique({ where: query });
  }
}
