import { Component, Input } from '@angular/core';
import { TodoEditModalComponent } from '../todo-edit-modal/todo-edit-modal.component';
import { ConfirmationModalComponent } from '../confirmation-modal/confirmation-modal.component';
import { todos } from '../../mocks/todos.mocks';

@Component({
  selector: 'app-todo-actions',
  standalone: true,
  imports: [TodoEditModalComponent, ConfirmationModalComponent],
  templateUrl: './todo-actions.component.html',
})
export class TodoActionsComponent {
  @Input({ required: true }) id: string | undefined;
  @Input({ required: true }) title: string | undefined;

  removeTodo() {
    const index = todos.findIndex((todo) => todo.id === this.id);
    if (index !== -1) {
      todos.splice(index, 1);
    }
  }

  editTodo(newTitle: string) {
    todos.forEach((todo) => {
      if (todo.id === this.id) {
        todo.title = newTitle;
      }
    });
  }
}
