import { IsEmail, IsString, Length } from 'class-validator';

export class CreateUserDto {
  @IsString()
  firstName: string;
  @IsString()
  lastName: string;
  @IsString()
  @Length(4, 16)
  password: string;
  @IsString()
  @IsEmail()
  email: string;
}
