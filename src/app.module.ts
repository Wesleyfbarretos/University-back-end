import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './database/prisma.service';
import { PrismaStudentRepository } from './repositories/prisma/prisma-student-repository';
import { StudentRepository } from './repositories/student-repository';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    AppService,
    PrismaService,
    { provide: StudentRepository, useClass: PrismaStudentRepository },
  ],
})
export class AppModule {}
