import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ITask } from '../interfaces/task.interface';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  @Input() newTask: string = null;

  editStatus: boolean;

  taskId: number;
  taskContent: string;

  taskList: ITask[] = [
    {
      content: 'HTML5',
      completed: false
    },
    {
      content: 'CSS3',
      completed: false
    }
  ]

  @Output() taskListLength = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
    this.taskListLength.emit(this.taskList.length);
  }

  ngOnChanges(): void {
    if (this.newTask !== null) {
      this.createNewTask();
    }
  }

  createNewTask(): void {
    let task: ITask = {
      content: this.newTask,
      completed: false
    }

    this.taskList.push(task);
    this.newTask = null;

    this.taskListLength.emit(this.taskList.length);
  }

  editTask(index: number): void {
    this.editStatus = true;

    this.taskId = index;
    this.taskContent = this.taskList[index].content;
  }

  saveChanges(e: Event): void {
    e.preventDefault();

    let task: ITask = {
      content: this.taskContent,
      completed: false
    }

    this.taskList.splice(this.taskId, 1, task);

    this.taskContent = '';

    this.editStatus = false;
    this.taskId = null;
  }

  deleteTask(index: number): void {
    this.taskList.splice(index, 1);

    this.taskListLength.emit(this.taskList.length);
  }

}
