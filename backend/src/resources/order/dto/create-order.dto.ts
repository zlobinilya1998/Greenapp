import { IsNumber, IsString } from 'class-validator';

export class CreateOrderDto {
  @IsNumber()
  customer_id: number;
  @IsString()
  time: string;
}
