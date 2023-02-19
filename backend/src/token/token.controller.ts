import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Req,
} from '@nestjs/common';
import { TokenService } from './token.service';
import { CreateTokenDto } from './dto/create-token.dto';
import { UpdateTokenDto } from './dto/update-token.dto';
import { JwtAuthGuard } from '../auth/jwt-auth-guard';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Токен')
@UseGuards(JwtAuthGuard)
@Controller('token')
export class TokenController {
  constructor(private readonly tokenService: TokenService) {}

  @Post()
  create(@Body() dto: CreateTokenDto, @Req() req) {
    const { id } = req.user;
    return this.tokenService.create({ ...dto, userId: id });
  }

  @Get()
  findAll(@Req() req) {
    const { id } = req.user;
    return this.tokenService.findAll(id);
  }

  @Get(':id')
  findOne(@Param('id') id: string, @Req() req) {
    const user = req.user;
    return this.tokenService.findOne(+id, user.id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTokenDto: UpdateTokenDto) {
    return this.tokenService.update(+id, updateTokenDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tokenService.remove(+id);
  }
}
