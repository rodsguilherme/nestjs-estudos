import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from 'src/auth/auth.decorator';
import { User } from '@prisma/client';
import { PrismaService } from '../prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async findOne(email: string): Promise<User | undefined> {
    const user = await this.prisma.user.findFirst({ where: { email } });

    if (!user) {
      throw new NotFoundException();
    }

    return user;
  }

  async findById(id: number): Promise<User | undefined> {
    return this.prisma.user.findUnique({ where: { id } });
  }

  async create(user: CreateUserDto): Promise<User | undefined> {
    return this.prisma.user.create({ data: user });
  }
}
