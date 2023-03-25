import {
  BelongsTo,
  Column,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { User } from '../../user/entities/user.entity';

export type OrderCreationInterface = {
  customer_id: number;
  time: string;
};

@Table({ tableName: 'orders' })
export class Order extends Model<Order, OrderCreationInterface> {
  @Column
  time: string;
  @ForeignKey(() => User)
  customer_id: number;
  @BelongsTo(() => User)
  user: User;
}
