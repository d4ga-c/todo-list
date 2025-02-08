import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Component, inject, TemplateRef } from '@angular/core';

import {
  NgbDatepickerModule,
  NgbModal,
  NgbModalRef,
} from '@ng-bootstrap/ng-bootstrap';
import { todos } from '../../mocks/todos.mocks';

@Component({
  selector: 'app-todo-modal',
  standalone: true,
  imports: [ReactiveFormsModule, NgbDatepickerModule],
  templateUrl: './todo-modal.component.html',
})
export class TodoModalComponent {
  private modalService = inject(NgbModal);
  private modalInstance?: NgbModalRef;
  inputTodo = new FormControl('', { nonNullable: true });

  open(content: TemplateRef<any>): void {
    this.modalInstance = this.modalService.open(content);
  }

  add(): void {
    const newTodo = {
      id: todos.length + 1 + '',
      title: this.inputTodo.value,
    };
    todos.push(newTodo);
    this.inputTodo.setValue('');
    this.modalInstance?.close();
  }
}
