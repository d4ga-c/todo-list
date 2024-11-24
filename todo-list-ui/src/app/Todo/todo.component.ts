import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-todo-component',
  templateUrl: './todo.component.html',
  standalone: true,
})
export class Todo {
  @Input() id!: string;
  @Input() title!: string;
}
