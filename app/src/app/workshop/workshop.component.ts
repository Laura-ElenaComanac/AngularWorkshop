import { Component, OnInit, inject } from '@angular/core';
import { TasksService } from '../services/tasks.service';

@Component({
  selector: 'app-workshop',
  templateUrl: './workshop.component.html',
  styleUrls: ['./workshop.component.css']
})
export class WorkshopComponent implements OnInit {

    constructor(private taskService: TasksService){
      this.taskList = taskService.getTasks()
    }
    
    ngOnInit(): void {
      console.log("Hello!")
    }

    title: string = 'Angular Basics Workshop';
    name: string = 'Angular Enthusiast';

    isDisabled: boolean = false;
    inputText: string = ''; // Hello

    hasAdminPrivileges: boolean = false;
    taskList: string[]

    onClick() {
      this.isDisabled = !this.isDisabled;
    }
}
