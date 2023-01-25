import { TodoEntity } from "../domain/TodoEntity";
import { countCompletedTodo} from "../domain/TodoModel";
import type {TodoStore} from "../domain/TodoStore"

type countCompletedTodoStore = Pick<TodoStore,"countCompletedTodo" | "todos">

class countCompletedTodoUserCase implements countCompletedTodoStore {

    constructor(public readonly todos: TodoEntity[]){}
    countCompletedTodo(): number {
        return countCompletedTodo(this.todos);
    }
} 

export default countCompletedTodoUserCase;

