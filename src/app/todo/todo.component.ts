import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { TodosService } from '../todos/todos.service';

@Component({
  selector: 'todo',
  inputs: ['todo'],
  outputs: ['deleteTodo'],
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todo;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private todosService: TodosService
  ) {

  }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      this.todo = this.todosService.find(id);
    });
  }

  deleteTodo(todo) {
    let index = this.todosService.remove(todo.id);
    this.router.navigate(['/']);
  }

  submittedTodo() {
    this.router.navigate(['/']);
  }
}
