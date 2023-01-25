import { TodoEntity } from "../domain/TodoEntity";
import type {TodoStore} from "../domain/TodoStore"

type getTodoStore = Pick<TodoStore,"getTodo" | "todos">

class getTodoUserCase implements getTodoStore {

    constructor(public readonly todos: TodoEntity[] | undefined){}

    getTodo(): TodoEntity[] | undefined {return this.todos;}
} 

export default getTodoUserCase;

