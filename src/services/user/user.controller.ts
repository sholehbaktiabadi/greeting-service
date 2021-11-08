import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  async getAll() {
    return this.userService.getAll();
  }

  @Post()
  async create(@Body() dto: UserDto) {
    return this.userService
      .create(dto)
      .then((res) => res)
      .catch((err) => err);
  }

  @Delete(':id')
  async del(@Param('id') id: number) {
    return this.userService
      .del(id)
      .then((res) => res)
      .catch((err) => err);
  }
}
