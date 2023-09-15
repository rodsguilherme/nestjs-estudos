import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from './auth.decorator';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(username);
    const { password, ...result } = user;

    if (password !== pass) {
      throw new UnauthorizedException();
    }

    const payload = { id: result.userId };
    return { ...result, token: await this.jwtService.signAsync(payload) };
  }

  async findById(id: number): Promise<any> {
    const user = await this.usersService.findById(id);

    return user;
  }

  async create(us: CreateUserDto): Promise<any> {
    const user = await this.usersService.create(us);

    return user;
  }
}
