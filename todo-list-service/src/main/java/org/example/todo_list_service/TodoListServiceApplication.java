package org.example.todo_list_service;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
public class TodoListServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(TodoListServiceApplication.class, args);
	}

	@RestController
	public class HelloController {

		@GetMapping("/hello")
		public String sayHello(String name, String lastName) {
			return "¡Hello World!";
		}
	}

}
