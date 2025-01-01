import { FormControl, ReactiveFormsModule } from '@angular/forms';
import {
  Component,
  inject,
  signal,
  TemplateRef,
  WritableSignal,
} from '@angular/core';

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
  closeResult: WritableSignal<string> = signal('');
  inputTodo = new FormControl('', { nonNullable: true });

  open(content: TemplateRef<any>) {
    this.modalInstance = this.modalService.open(content);
  }

  add() {
    const newTodo = {
      id: todos.length + 1 + '',
      title: this.inputTodo.value,
    };
    todos.push(newTodo);
    this.inputTodo.setValue('');
    this.modalInstance?.close();
  }
}
