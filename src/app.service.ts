import { Injectable } from '@nestjs/common';
import { Student } from '@prisma/client';
import { StudentRepository } from './repositories/student-repository';

export interface QueryStudent {
  id?: number;
  email?: string;
}

@Injectable()
export class AppService {
  constructor(private studentRepository: StudentRepository) {}

  async create(name: string, email: string): Promise<void> {
    await this.studentRepository.create(name, email);
  }

  async get(): Promise<Student[]> {
    const students = this.studentRepository.get();

    return students;
  }

  async getOne(query: string): Promise<Student> {
    const buildQuery = this.buildFindStudentQuery(query);
    const student = await this.studentRepository.getOne(buildQuery);

    return student;
  }

  buildFindStudentQuery(id: string): QueryStudent {
    if (!isNaN(+id)) {
      return { id: Number(id) };
    }

    return { email: id };
  }
}
