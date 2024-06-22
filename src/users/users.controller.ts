import { Controller, Get, Post, Param, Body, Put, Delete } from '@nestjs/common';
import { UsersService, User } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  findAll(): User[] {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): User {
    return this.usersService.findOne(Number(id));
  }

  @Post()
  create(@Body() createUserDto: Omit<User, 'id'>): User {
    return this.usersService.create(createUserDto);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updateUserDto: Partial<User>): User {
    return this.usersService.update(Number(id), updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number): void {
    this.usersService.remove(Number(id));
  }
}
