import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserController } from './users.controller';
import { AuthService } from 'src/auth/auth.service';
import { PrismaService } from 'src/prisma.service';
@Module({
  providers: [UsersService, AuthService, PrismaService],
  exports: [UsersService],
  controllers: [UserController],
})
export class UsersModule {}
