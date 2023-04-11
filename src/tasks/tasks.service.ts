import { Injectable } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { Task, TaskStatus } from './tasks.model';

@Injectable()
export class TasksService {
  private tasks: Task[] = [
    {
      id: '1',
      title: 'firstTask',
      description: 'Do Stuff',
      status: TaskStatus.OPEN,
    },
  ];

  helloWorld() {
    return 'Hello World';
  }

  getAllTasks(): Task[] {
    return this.tasks;
  }

  create(title: string, description: string): Task {
    const task: Task = {
      id: uuid(),
      title,
      description,
      status: TaskStatus.OPEN,
    };

    this.tasks.push(task);
    return task;
  }
}
