import {
  Component,
  EventEmitter,
  inject,
  Input,
  Output,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-confirmation-modal',
  standalone: true,
  templateUrl: './confirmation-modal.component.html',
})
export class ConfirmationModalComponent {
  @Input({ required: true }) message?: string;
  @Output() confirmed = new EventEmitter<boolean>();
  @ViewChild('content') content!: TemplateRef<unknown>;

  private modalService = inject(NgbModal);
  private modalInstance?: NgbModalRef;

  open(): Promise<unknown> {
    this.modalInstance = this.modalService.open(this.content);
    return this.modalInstance.result;
  }

  confirm() {
    this.modalInstance?.close();
    this.confirmed.emit(true);
  }

  cancel() {
    this.modalInstance?.dismiss('Cancel');
    this.confirmed.emit(false);
  }
}
