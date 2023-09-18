import { AuthGuard } from 'src/auth/auth.guard';
import { AuthService } from './../auth/auth.service';
import {
  Controller,
  Param,
  ParseIntPipe,
  Get,
  UseGuards,
} from '@nestjs/common';

@Controller('users')
export class UserController {
  constructor(private authService: AuthService) {}

  @UseGuards(AuthGuard)
  @Get(':id')
  getUser(@Param('id', new ParseIntPipe()) id: number) {
    return this.authService.findById(id);
  }
}
