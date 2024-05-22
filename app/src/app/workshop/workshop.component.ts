import { Component, inject } from '@angular/core';
import { TasksService } from '../services/tasks.service';

@Component({
  selector: 'app-workshop',
  templateUrl: './workshop.component.html',
  styleUrls: ['./workshop.component.css']
})
export class WorkshopComponent {

  constructor(private taskService: TasksService){
    this.taskList = taskService.getTasks()
  }

    title: string = 'Angular Basics Workshop';
    name: string = 'Angular Enthusiast';

    isDisabled: boolean = false;
    inputText: string = '';

    hasAdminPrivileges: boolean = false;
    taskList: string[]

    onClick() {
      this.isDisabled = !this.isDisabled;
    }
}
