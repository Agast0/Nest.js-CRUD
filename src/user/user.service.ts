import {Injectable} from '@nestjs/common';
import { CreateUserDTO } from "./DTO/create-user.DTO";
import { UpdateUserDTO } from "./DTO/update-user.DTO";
import { ParamsEmailDTO } from "./DTO/params-email.DTO";
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/user.schema';
import { Model } from "mongoose";
import {HashService} from "../globals/hash/hash.service";
import {UserExceptionsUserNotFound} from "./exceptions/user.exceptions.UserNotFound";

@Injectable()
export class UserService {
    constructor(
        @InjectModel(User.name) private userModel: Model<User>,
        private readonly hashService: HashService
    ) {}
    async CreateUser(createUserDTO: CreateUserDTO) {
        const hashedPassword = await this.hashService.getHashedPassword(createUserDTO.password);
        const dbObject = {
            username: createUserDTO.username,
            email: createUserDTO.email,
            password: hashedPassword,
        }

        const createdUser = new this.userModel(dbObject)
        await createdUser.save();
        return;
    }

    async GetAllUsers() {
        const users = await this.userModel.find().exec();
        return users.map((user) => ({email: user.email, username: user.username}));
    }

    async GetUser(paramsEmailDTO: ParamsEmailDTO) {
        const user = await this.userModel.findOne({email: paramsEmailDTO.email}).exec();
        if (!user) throw new UserExceptionsUserNotFound();
        return {email: user.email, username: user.username};
    }

    async UpdateUser(updateUserDTO: UpdateUserDTO) {
        const user = await this.userModel.findOne({email: updateUserDTO.email}).exec();
        if (!user) throw new UserExceptionsUserNotFound();
        if (updateUserDTO.username) user.username = updateUserDTO.username;
        if (updateUserDTO.password && !(await this.hashService.isPasswordSameAsHash(updateUserDTO.password, user.password))) {
            user.password = await this.hashService.getHashedPassword(updateUserDTO.password);
        }
        user.save();
        return;
    }

    async DeleteUser(paramsEmailDTO: ParamsEmailDTO) {
        const result = await this.userModel.findOneAndDelete({email: paramsEmailDTO.email}).exec();
        if (!result) throw new UserExceptionsUserNotFound();
        return;
    }
}
