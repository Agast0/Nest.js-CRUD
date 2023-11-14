import {
  Body,
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
} from '@nestjs/common';
import { CreateUserDTO } from './DTO/create-user.DTO';
import { UpdateUserDTO } from './DTO/update-user.DTO';
import { UserService } from './user.service';
import { ParamsEmailDTO } from './DTO/params-email.DTO';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(@Body() createUserDTO: CreateUserDTO) {
    return await this.userService.CreateUser(createUserDTO);
  }

  @Get('all')
  async getAllUsers() {
    return await this.userService.GetAllUsers();
  }

  @Get(':email')
  async getUser(@Param() params: ParamsEmailDTO) {
    return await this.userService.GetUser(params);
  }

  @Patch()
  async updateUser(@Body() updateUserDTO: UpdateUserDTO) {
    return await this.userService.UpdateUser(updateUserDTO);
  }

  @Delete(':email')
  async deleteUser(@Param() params: ParamsEmailDTO) {
    return await this.userService.DeleteUser(params);
  }
}
