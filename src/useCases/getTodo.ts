import { FilterEntity } from "../domain/FilterEntity";
import { TodoEntity } from "../domain/TodoEntity";
import { getTodo } from "../domain/TodoModel";
import type {TodoStore} from "../domain/TodoStore"

type getTodoStore = Pick<TodoStore,"getTodo" | "todos">

class getTodoUserCase implements getTodoStore {

    constructor(public readonly todos: TodoEntity[]){}

    getTodo(name:FilterEntity["name"] = "All"): TodoEntity[] {
        return getTodo(this.todos,name);
    }
} 

export default getTodoUserCase;

