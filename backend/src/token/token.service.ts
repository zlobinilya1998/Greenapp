import { Injectable } from '@nestjs/common';
import { CreateTokenDto } from './dto/create-token.dto';
import { UpdateTokenDto } from './dto/update-token.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Token } from './entities/token.entity';

@Injectable()
export class TokenService {
  constructor(
    @InjectModel(Token) private readonly tokenRepository: typeof Token,
  ) {}

  async create(dto: CreateTokenDto) {
    return await this.tokenRepository.create(dto);
  }

  findAll(userId: number) {
    return this.tokenRepository.findAll({
      where: {
        userId,
      },
    });
  }

  findOne(id: number, userId: number) {
    return this.tokenRepository.findOne({
      where: {
        id,
        userId,
      },
    });
  }

  update(id: number, updateTokenDto: UpdateTokenDto) {
    return `This action updates a #${id} token`;
  }

  remove(id: number) {
    return this.tokenRepository.destroy({
      where: {
        id,
      },
    });
  }
}
