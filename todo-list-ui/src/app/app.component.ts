import { Component } from '@angular/core';
import { HelloWorld } from './HelloWorld/helloWorld.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HelloWorld],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = "todo-list-ui";
}
