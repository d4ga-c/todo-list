import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelloWorld } from './HelloWorld/helloWorld.component';
import { Todo } from './Todo/todo.component';
import { todos } from '../mocks/mocks.todos';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HelloWorld, Todo],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'todo-list-ui';
  todos = todos;
}
