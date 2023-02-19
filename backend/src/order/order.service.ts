import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Order } from './entities/order.entity';
import { User } from '../user/entities/user.entity';

@Injectable()
export class OrderService {
  constructor(@InjectModel(Order) private orderRepository: typeof Order) {}
  async create(createOrderDto: CreateOrderDto) {
    return await this.orderRepository.create(createOrderDto);
  }

  async findAll(userId: number) {
    return await this.orderRepository.findAll({
      where: {
        customer_id: userId,
      },
      attributes: {
        exclude: ['customer_id'],
      },
    });
  }

  async findOne(id: number) {
    return await this.orderRepository.findOne({
      include: [
        {
          model: User,
          attributes: ['id', 'firstName', 'lastName', 'email'],
        },
      ],
      where: {
        id,
      },
      attributes: {
        exclude: ['customer_id'],
      },
    });
  }

  update(id: number, updateOrderDto: UpdateOrderDto) {
    return `This action updates a #${id} order`;
  }

  remove(id: number) {
    return `This action removes a #${id} order`;
  }
}
