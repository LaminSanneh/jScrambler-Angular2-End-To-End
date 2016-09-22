import { Component, OnInit } from '@angular/core';
import { TodosService } from './todos.service';

@Component({
  selector: 'todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  public todos = [];
  todoTitle: "";

  constructor(private todosService: TodosService) {
      
  }

  ngOnInit() {
    this.todos = this.todosService.findAll();
  }

  onSubmitNewTodo (title: string) {
    if(title.trim().length !== 0) {
      this.todosService.add({title: title});
      this.todoTitle = "";
    }
  }
}
