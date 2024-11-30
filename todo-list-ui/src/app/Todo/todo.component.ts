import { Component, Input } from '@angular/core';

@Component({
  selector: 'todo-component',
  templateUrl: './todo.component.html',
  standalone: true,
})
export class TodoComponent {
  @Input({ required: true }) id: string | undefined;
  @Input({ required: true }) title: string | undefined;
}
