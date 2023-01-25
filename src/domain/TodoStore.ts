import { FilterEntity } from "./FilterEntity";
import type { TodoEntity } from "./TodoEntity";

interface TodoStore {
    // State
    todos: TodoEntity[];
    filter:FilterEntity;

    //Actions
    createTodo(title:TodoEntity["title"]):TodoEntity[];
    updateTodo(id:TodoEntity["id"]):TodoEntity[];
    removeTodo(id:TodoEntity["id"]):TodoEntity[];
    getTodo(name:FilterEntity["name"]):TodoEntity[];

}

export type {TodoStore};