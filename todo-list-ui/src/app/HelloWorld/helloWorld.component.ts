import { Component } from '@angular/core';

@Component({
  selector: 'hello-world',
  templateUrl: './helloWorld.component.html',
  standalone: true,
})
export class HelloWorldComponent {
  title = 'Hello World';
  message = 'This is a message';
}
