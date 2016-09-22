import {Injectable} from '@angular/core';
import { TODOS } from './todos.fixtures';

@Injectable()
export class TodosService {
  todos: any[];

	constructor() {
		this.todos = TODOS;
	}

	find(id) {
			return this.todos.find((todo) => { return todo.id == id; });
	}

	findAll() {
		return this.todos;
	}

	add(todo) {
		let id = this.todos.reduce((prev, current, currentIndex, list) => {
			if(list.length == 1) {
				return list[0].id;
			}

			if(current.id > prev.id) {
				return current.id;
			} else if (prev.id > current.id) {
				return prev.id;
			}

			return current.id;
		});

		todo.id = id + 1;
		this.todos.push(todo);
	}

	remove(id) {
		let index = this.todos.findIndex((todo) => { return todo.id === id; });
		this.todos.splice(index, 1);
	}
}