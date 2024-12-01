package org.example.todo_list_service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TodosController {

    @GetMapping("/todos")
    public List<Todo> getAllTodos() {
        var todos = new ArrayList<Todo>();

        todos.add(new Todo("123-456-789", "title 1"));
        todos.add(new Todo("987-654-321", "title 2"));

        return todos;
    }
}
