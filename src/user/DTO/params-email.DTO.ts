import {IsEmail, IsNotEmpty, IsString} from 'class-validator';

export class ParamsEmailDTO {
    @IsString() @IsEmail() @IsNotEmpty()
    email: string;
}