import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from './entities/task.entity';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class TaskService {
  constructor(
    @InjectModel(Task)
    private readonly taskRepository: typeof Task,
  ) {}
  async create(dto: CreateTaskDto) {
    const task = await this.taskRepository.create(dto);
    return task;
  }

  findAll(userId: number) {
    return this.taskRepository.findAll({
      where: {
        userId,
      },
    });
  }

  findOne(id: number, userId: number) {
    return this.taskRepository.findOne({
      where: {
        id,
        userId,
      },
    });
  }

  update(id: number, updateTaskDto: UpdateTaskDto) {
    return `This action updates a #${id} task`;
  }

  remove(id: number) {
    return `This action removes a #${id} task`;
  }
}
