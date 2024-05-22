import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  taskList = ["Task1", "Task2", "Task3"]

  getTasks(): string[] {
    return this.taskList;
  }
}
