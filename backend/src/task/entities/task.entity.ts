import {
  BelongsTo,
  Column,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { User } from '../../user/entities/user.entity';

interface TaskCreationInterface {
  title: string;
  description: string;
  userId: number;
}

@Table({ tableName: 'tasks' })
export class Task extends Model<Task, TaskCreationInterface> {
  @Column
  title: string;

  @Column
  description: string;

  @Column({ defaultValue: false })
  isCompleted: boolean;

  @ForeignKey(() => User)
  userId: number;
  @BelongsTo(() => User)
  user: User;
}
