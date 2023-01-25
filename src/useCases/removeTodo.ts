import { TodoEntity } from "../domain/TodoEntity";
import { removeTodo } from "../domain/TodoModel";
import type {TodoStore} from "../domain/TodoStore"

type removeTodoStore = Pick<TodoStore,"removeTodo" | "todos">

class removeTodoUserCase implements removeTodoStore {

    constructor(public readonly todos: TodoEntity[] ){}

    removeTodo(id:TodoEntity["id"]): TodoEntity[] {return removeTodo(this.todos,id);}
} 

export default removeTodoUserCase;

