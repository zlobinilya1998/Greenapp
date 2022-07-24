import {
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { CreateUserDto } from '../user/dto/create-user.dto';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { User } from '../user/entities/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async login(dto: CreateAuthDto) {
    const user = await this.validateUser(dto);
    return this.generateToken(user);
  }

  async register(dto: CreateUserDto) {
    const candidate = await this.userService.getByEmail(dto.email);
    if (candidate)
      throw new HttpException(
        'Пользователь с таким email уже существует',
        HttpStatus.BAD_REQUEST,
      );

    const hashPassword = await bcrypt.hash(dto.password, 6);
    const user = await this.userService.create({
      ...dto,
      password: hashPassword,
    });
    return this.generateToken(user);
  }

  async validateUser(dto: CreateAuthDto) {
    const user = await this.userService.getByEmail(dto.email);
    if (!user) {
      throw new UnauthorizedException({
        message: 'Некорректный емейл или пароль',
      });
    }
    const passwordEquals = await bcrypt.compare(dto.password, user.password);
    if (!passwordEquals) {
      throw new UnauthorizedException({
        message: 'Некорректный емейл или пароль',
      });
    }
    return user;
  }

  async generateToken(user: User) {
    const payload = {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      id: user.id,
      isBanned: user.isBanned,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
      locale: user.locale,
    };
    return {
      token: this.jwtService.sign(payload),
    };
  }
}
