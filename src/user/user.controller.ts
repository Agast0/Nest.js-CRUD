import {
  Body,
  Controller,
  Get,
  Post,
  Headers,
  Patch,
  Delete,
} from '@nestjs/common';
import { CreateUserDTO } from './DTO/create-user.DTO';
import { UpdateUserDTO } from './DTO/update-user.DTO';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  createUser(@Body() createUserDTO: CreateUserDTO): string {
    return this.userService.CreateUser(createUserDTO);
  }

  @Get('all')
  getAllUsers(): string {
    return this.userService.GetAllUsers();
  }

  @Get()
  getUser(@Headers('id') id: string): string {
    return this.userService.GetUser(id);
  }

  @Patch()
  updateUser(@Body() updateUserDTO: UpdateUserDTO): string {
    return this.userService.UpdateUser(updateUserDTO);
  }

  @Delete()
  deleteUser(@Headers('id') id: string): string {
    return this.userService.DeleteUser(id);
  }
}
