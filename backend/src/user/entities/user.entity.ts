import { Column, Model, Table } from 'sequelize-typescript';

interface UserCreationInterface {
  firstName: string;
  lastName: string;
  password: string;
  email: string;
}

@Table({ tableName: 'users' })
export class User extends Model<User, UserCreationInterface> {
  @Column
  firstName: string;

  @Column
  lastName: string;

  @Column
  password: string;

  @Column
  email: string;

  @Column({ defaultValue: false })
  isBanned: boolean;
}
