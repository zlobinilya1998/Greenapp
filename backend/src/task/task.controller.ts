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
  ValidationPipe,
  UsePipes,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { JwtAuthGuard } from '../auth/jwt-auth-guard';

@UseGuards(JwtAuthGuard)
@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @UsePipes(ValidationPipe)
  @Post()
  create(@Body() dto: CreateTaskDto, @Req() req) {
    const { id } = req.user;
    return this.taskService.create({ ...dto, userId: id });
  }

  @Get()
  findAll(@Req() req) {
    const { id } = req.user;
    return this.taskService.findAll(id);
  }

  @Get(':id')
  findOne(@Param('id') id: string, @Req() req) {
    const user = req.user;
    return this.taskService.findOne(+id, user.id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto) {
    return this.taskService.update(+id, updateTaskDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.taskService.remove(+id);
  }
}
