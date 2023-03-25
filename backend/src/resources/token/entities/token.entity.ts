import {
  BelongsTo,
  Column,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { User } from '../../user/entities/user.entity';

interface TokenCreationInterface {
  address: string;
  userId: number;
}

@Table({ tableName: 'tokens' })
export class Token extends Model<Token, TokenCreationInterface> {
  @Column
  address: string;

  @Column
  round: string;

  @Column
  allocation: number;

  @Column
  blocked: number;
  @Column
  unlocked: number;

  @Column
  timeToUnlock: Date;

  @ForeignKey(() => User)
  userId: number;
  @BelongsTo(() => User)
  user: User;
}
