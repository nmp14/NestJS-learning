import { Body, Controller, Get, Post } from '@nestjs/common';
import { Task } from './tasks.model';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get('/test')
  hellowWorld() {
    return this.tasksService.helloWorld();
  }

  @Get('/all')
  getAllTasks(): Task[] {
    return this.tasksService.getAllTasks();
  }

  @Post()
  async createTask(
    @Body('title') title,
    @Body('description') description,
  ): Promise<Task> {
    return await this.tasksService.create(title, description);
  }
}
