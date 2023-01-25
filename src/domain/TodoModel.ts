import type { TodoEntity } from "./TodoEntity";

// It can create a new todo
const createTodo = (title:TodoEntity["title"]) => ({id:Date.now(),title, completed:false});
 
// It can remove a todo by id
const removeTodo = (todos:TodoEntity[],id:TodoEntity["id"]) => todos.filter((todo) => todo.id !== id);

// It can update a todo by id
const updateTodo = (todos:TodoEntity[], id:TodoEntity["id"]) =>
    todos.map((todo)=> todo.id === id ? {...todo, completed: !todo.completed} : todo);




export {createTodo,removeTodo,updateTodo};