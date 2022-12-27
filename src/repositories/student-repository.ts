import { Student } from '@prisma/client';
import { QueryStudent } from 'src/app.service';

export abstract class StudentRepository {
  abstract create(name: string, email: string): Promise<void>;
  abstract get(): Promise<Student[]>;
  abstract getOne(query: QueryStudent): Promise<Student>;
}
