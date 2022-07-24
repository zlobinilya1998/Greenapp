import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User)
    private userRepository: typeof User,
  ) {}

  async create(dto: CreateUserDto) {
    const user = await this.userRepository.create(dto);
    return user;
  }

  findAll() {
    return this.userRepository.findAll();
  }

  async findOne(id: number) {
    const user = await this.userRepository.findOne({ where: { id } });
    if (user) return user;
    throw new HttpException('Пользователь не найден', HttpStatus.NOT_FOUND);
  }

  async getByEmail(email: string) {
    const user = this.userRepository.findOne({ where: { email } });
    return user;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  async changeLocale(id: number, locale: string) {
    return await this.userRepository.update(
      {
        locale,
      },
      { where: { id } },
    );
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
