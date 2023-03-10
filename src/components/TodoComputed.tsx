import { TodoStore } from "../domain/TodoStore";

const TodoComputed = (
  {countCompletedTodo,clearCompletedTodo}:
  {countCompletedTodo:number,clearCompletedTodo:VoidFunction}
  ) => {
  return (
    <section className="transition-all duration-1000 py-4 px-4 flex justify-between bg-white rounded-b-md dark:bg-gray-800">
      <span className="text-gray-400 "> {countCompletedTodo} items left</span>
      <button
      onClick={() => clearCompletedTodo()}
      className="text-gray-400">Clear Completed</button>
    </section>
    );
}
export default TodoComputed;