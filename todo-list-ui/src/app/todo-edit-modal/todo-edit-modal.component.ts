import {
  Component,
  EventEmitter,
  inject,
  Input,
  Output,
  TemplateRef,
} from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  NgbDatepickerModule,
  NgbModal,
  NgbModalRef,
} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-todo-edit-modal',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, NgbDatepickerModule],
  templateUrl: './todo-edit-modal.component.html',
})
export class TodoEditModalComponent {
  @Input({ required: true }) id: string | undefined;
  @Input({ required: true }) title: string | undefined;
  @Output() newTitle = new EventEmitter<string>();

  private modalService = inject(NgbModal);
  private modalInstance?: NgbModalRef;
  inputTodo = new FormControl('', { nonNullable: true });

  open(content: TemplateRef<any>): Promise<unknown> {
    this.inputTodo.setValue(this.title ?? '');
    this.modalInstance = this.modalService.open(content);
    return this.modalInstance.result;
  }

  editTodo() {
    this.newTitle.emit(this.inputTodo.value);
    this.modalInstance?.close();
  }

  cancel() {
    this.newTitle.emit('');
    this.modalInstance?.dismiss('Cancel');
  }
}
