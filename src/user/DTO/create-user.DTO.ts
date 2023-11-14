import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateUserDTO {
    @IsString() @IsEmail() @IsNotEmpty()
    email: string;

    @IsString() @MaxLength(50) @IsNotEmpty()
    username: string;

    @IsString() @MinLength(8) @MaxLength(50) @IsNotEmpty()
    password: string;
}