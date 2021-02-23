import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  count: number;

  newTask: string = null;
  currentNewTaskContent: string = null;

  constructor() { }

  ngOnInit(): void { }

  addNewTask(e: Event): void {
    e.preventDefault();

    this.newTask = this.currentNewTaskContent;
    this.currentNewTaskContent = null;
  }

  setTaskCount(taskCount: number): void {
    this.count = taskCount;
  }
}
