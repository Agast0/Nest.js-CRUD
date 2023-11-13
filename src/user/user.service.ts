import { Injectable } from '@nestjs/common';
import {CreateUserDTO} from "./DTO/create-user.DTO";
import {UpdateUserDTO} from "./DTO/update-user.DTO";

@Injectable()
export class UserService {
    CreateUser(createUserDTO: CreateUserDTO): string {
        return `Creating user: ${createUserDTO.username}`;
    }

    GetAllUsers(): string {
        return `all users`;
    }

    GetUser(id: string): string {
        return `User: ${id}`
    }

    UpdateUser(updateUserDTO: UpdateUserDTO): string {
        return `Update request from ${updateUserDTO.id}: ${updateUserDTO.email}, ${updateUserDTO.username}, ${updateUserDTO.password}`;
    }

    DeleteUser(id: string): string {
        return `Deleted user with id: ${id}`;
    }
}
