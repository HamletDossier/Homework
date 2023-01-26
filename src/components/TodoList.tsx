import { TodoEntity } from "../domain/TodoEntity";
import { TodoStore } from "../domain/TodoStore";
import TodoItem from "./TodoItem";

const TodoList = ({todos, removeTodo, updateTodo}:{todos:TodoEntity[],removeTodo:any,updateTodo:any}) => {
  return (
  <div className="bg-white rounded-t-md [&>article]:p-4 mt-8 overflow-hidden">
   {todos.map((todo)=> (
     <TodoItem key={todo.id} todo={todo} removeTodo={removeTodo} updateTodo={updateTodo}/>
   ))}

    </div>
);
}

export default TodoList;
