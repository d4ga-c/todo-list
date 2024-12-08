import { Component } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  standalone: true,
})
export class HelloWorldComponent {
  title = 'Hello World';
  message = 'This is a message';
}
