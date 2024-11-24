import { Component } from "@angular/core";

@Component({
    selector: "app-helloWorld",
    templateUrl: "./helloWorld.component.html",
    standalone: true,
})
export class HelloWorld{
    title = "Hello World";
    message = "This is a message";
}