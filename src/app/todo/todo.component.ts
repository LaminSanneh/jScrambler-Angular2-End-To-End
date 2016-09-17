import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'todo',
  inputs: ['todo'],
  outputs: ['deleteTodo'],
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todo;
  public deleteTodo: EventEmitter<any> = new EventEmitter();
  constructor() {}

  ngOnInit() {
  }

  deleteTodoOnChild(todo) {
    this.deleteTodo.next(todo);
  }

}
