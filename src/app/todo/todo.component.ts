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
  inEditMode = false;
  public deleteTodo: EventEmitter<any> = new EventEmitter();
  constructor() {}

  ngOnInit() {
  }

  titleClicked(e) {
    this.inEditMode = true;
  }

  onBlur() {
    this.inEditMode = false;
  }

  submittedTodo(e) {
    this.inEditMode = false;
  }

  deleteTodoOnChild(todo) {
    this.deleteTodo.next(todo);
  }

}
