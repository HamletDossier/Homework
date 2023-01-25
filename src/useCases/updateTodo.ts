import { TodoEntity } from "../domain/TodoEntity";
import { updateTodo } from "../domain/TodoModel";
import type {TodoStore} from "../domain/TodoStore"

type updateTodoStore = Pick<TodoStore,"updateTodo" | "todos">

class updateTodoUserCase implements updateTodoStore {

    constructor(public readonly todos: TodoEntity[] ){}

    updateTodo(id:TodoEntity["id"]): TodoEntity[] {return updateTodo(this.todos,id);}
} 

export default updateTodoUserCase;

