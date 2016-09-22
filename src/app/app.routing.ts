import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodosComponent } from './todos/todos.component';
import { TodoComponent } from './todo/todo.component';

const appRoutes: Routes = [
  { path: '', component: TodosComponent },
  { path: 'todo/:id', component: TodoComponent },
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);