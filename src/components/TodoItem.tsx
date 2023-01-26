import { TodoEntity } from "../domain/TodoEntity";
import { TodoStore } from "../domain/TodoStore";
import CheckIcon from "./icons/CheckIcon";
import CrossIcon from "./icons/CrossIcon";

const TodoItem = ({todo,removeTodo,updateTodo}:{todo:TodoEntity,removeTodo:TodoStore["removeTodo"],updateTodo:TodoStore["updateTodo"]}) => {
  const {id,title,completed} = todo;
  return (
    <article className="flex gap-4 border-b border-b-gray-400 dark:bg-gray-800 transition-all duration-1000">
        <button
        onClick={() => updateTodo(id)}
        className={`rounded-full border-2 h-5 w-5 flex-none 
        ${completed 
          ? "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex justify-center items-center"
          :"inline-block"
        }`}>
          {completed && <CheckIcon />}
        </button>
        <p className={`text-gray-600 grow ${completed && "line-through"} dark:text-gray-400`}>{title}</p>
        <button
        onClick={() => removeTodo(id)} 
        className="flex-none"
        >
          <CrossIcon />
        </button>

    </article>
    );
}
export default TodoItem