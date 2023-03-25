import { IsNumber, IsString } from 'class-validator';

export class CreateProductDto {
  @IsNumber()
  price: number;
  @IsNumber()
  oldPrice: number;
  @IsString()
  title: string;
}
