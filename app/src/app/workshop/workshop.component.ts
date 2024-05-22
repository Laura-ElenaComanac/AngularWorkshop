import { Component } from '@angular/core';

@Component({
  selector: 'app-workshop',
  templateUrl: './workshop.component.html',
  styleUrls: ['./workshop.component.css']
})
export class WorkshopComponent {
    title: string = 'Angular Basics Workshop';
    name: string = 'Angular Enthusiast';

    isDisabled: boolean = false;
    inputText: string = '';

    hasAdminPrivileges: boolean = false;
    taskList = ["Task1", "Task2", "Task3"]

    onClick() {
      this.isDisabled = !this.isDisabled;
    }
}
