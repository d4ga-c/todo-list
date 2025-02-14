import { Component, Input } from '@angular/core';
import { TodoEditModalComponent } from '../todo-edit-modal/todo-edit-modal.component';
import { ConfirmationModalComponent } from '../confirmation-modal/confirmation-modal.component';

@Component({
  selector: 'app-todo-actions',
  standalone: true,
  imports: [TodoEditModalComponent, ConfirmationModalComponent],
  templateUrl: './todo-actions.component.html',
})
export class TodoActionsComponent {
  @Input({ required: true }) id: string | undefined;
  @Input({ required: true }) title: string | undefined;

  removeTodo() {}

  editTodo(newTitle: string) {}
}
