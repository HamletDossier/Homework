import { TodoEntity } from "../domain/TodoEntity";
import { createTodo } from "../domain/TodoModel";
import type {TodoStore} from "../domain/TodoStore"

type createTodoStore = Pick<TodoStore,"createTodo" | "todos">

class createTodoUserCase implements createTodoStore {

    constructor(public readonly todos: TodoEntity[]){}

    createTodo(title: string): TodoEntity[] {
        return createTodo(this.todos,title);
    }

} 

export default createTodoUserCase;

