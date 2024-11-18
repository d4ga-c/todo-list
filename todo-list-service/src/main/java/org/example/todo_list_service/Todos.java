
package org.example.todo_list_service;

public class Todos {

    private String id;
    private String title;

    public Todos(String id, String title) {
        this.id = id;
        this.title = title;
    }

    public String getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }
}
