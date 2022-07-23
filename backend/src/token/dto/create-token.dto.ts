import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateTokenDto {
  @IsString()
  @IsNotEmpty()
  address: string;
  @IsNumber()
  @IsNotEmpty()
  userId: number;
}
