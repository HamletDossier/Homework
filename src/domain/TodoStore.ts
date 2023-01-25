import type { TodoEntity } from "./TodoEntity";

interface TodoStore {
    // State
    todos: TodoEntity[] | undefined;
    filter:string;

    //Actions
    createTodo(title:TodoEntity["title"]):TodoEntity;
    updateTodo(id:TodoEntity["id"]):TodoEntity[];
    removeTodo(id:TodoEntity["id"]):TodoEntity[];
    getTodo():TodoEntity[] | undefined;

}

export type {TodoStore};