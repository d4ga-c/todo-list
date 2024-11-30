import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelloWorldComponent } from './HelloWorld/helloWorld.component';
import { TodoComponent } from './Todo/todo.component';
import { todos } from '../mocks/todos.mocks';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HelloWorldComponent, TodoComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'todo-list-ui';
  todos = todos;
}
