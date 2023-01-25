import { TodoEntity } from "../domain/TodoEntity";
import { clearCompletedTodo } from "../domain/TodoModel";
import type {TodoStore} from "../domain/TodoStore"

type clearCompletedTodoStore = Pick<TodoStore,"clearCompletedTodo" | "todos">

class clearCompletedTodoUserCase implements clearCompletedTodoStore {

    constructor(public readonly todos: TodoEntity[]){}
    clearCompletedTodo(): TodoEntity[] {
        return clearCompletedTodo(this.todos);
    }
} 

export default clearCompletedTodoUserCase;