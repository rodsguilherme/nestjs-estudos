import { SetMetadata } from '@nestjs/common';
import { IsEmail, IsNotEmpty } from 'class-validator';

export const Auth = (...args: string[]) => SetMetadata('auth', args);

export class CreateUserDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;
}
