/* eslint-disable indent */
import { IsNotEmpty } from 'class-validator';

export class StudentBody {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  email: string;
}
