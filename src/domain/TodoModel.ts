import { FilterEntity } from "./FilterEntity";
import type { TodoEntity } from "./TodoEntity";

// It can create a new todo
const createTodo = (todos:TodoEntity[],title:TodoEntity["title"]) => {
    const newTodo:TodoEntity = {id:Date.now(),title, completed:false};
    todos = [...todos,newTodo];
    return todos;
};
 
// It can remove a todo by id
const removeTodo = (todos:TodoEntity[],id:TodoEntity["id"]) => todos.filter((todo) => todo.id !== id);

// It can update a todo by id
const updateTodo = (todos:TodoEntity[], id:TodoEntity["id"]) =>
    todos.map((todo)=> todo.id === id ? {...todo, completed: !todo.completed} : todo);

// It can show all todos by name filter
const getTodo = (todos:TodoEntity[],name:FilterEntity['name']) => {
    if(name === "active")
        return todos.filter((todo)=> !todo.completed);
    if(name === "completed")
        return todos.filter((todo)=> todo.completed);
    return todos;
} 




export {createTodo,removeTodo,updateTodo,getTodo};