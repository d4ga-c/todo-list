import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo/todo.component';
import { TodoModalComponent } from './todo-modal/todo-modal.component';
import { TodoActionsComponent } from './todo-actions/todo-actions.component';
import { todos } from '../mocks/todos.mocks';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    TodoComponent,
    TodoModalComponent,
    TodoActionsComponent,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'todo-list-ui';
  todos = todos;
}
