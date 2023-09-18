import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserController } from './users.controller';
import { AuthService } from 'src/auth/auth.service';
@Module({
  providers: [UsersService, AuthService],
  exports: [UsersService],
  controllers: [UserController],
})
export class UsersModule {}
