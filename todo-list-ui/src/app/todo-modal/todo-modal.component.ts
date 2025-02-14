import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Component, inject, TemplateRef } from '@angular/core';

import {
  NgbDatepickerModule,
  NgbModal,
  NgbModalRef,
} from '@ng-bootstrap/ng-bootstrap';

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
    this.inputTodo.setValue('');
    this.modalInstance?.close();
  }
}
