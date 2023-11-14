import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class UpdateUserDTO {
    @IsEmail() @IsString() @IsNotEmpty()
    email: string;

    @IsString() @MaxLength(50) @IsOptional()
    username: string;

    @IsString() @MinLength(8) @MaxLength(50) @IsOptional()
    password: string;
}