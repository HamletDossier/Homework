import { useEffect, useState } from "react";
import initialStateTodos from "../data/initialStateTodos";
import { FilterEntity } from "../domain/FilterEntity";
import { TodoEntity } from "../domain/TodoEntity";
import clearCompletedTodoUserCase from "../useCases/clearCompletedTodo";
import countCompletedTodoUserCase from "../useCases/countCompletedTodo";
import createTodoUserCase from "../useCases/createTodo";
import getTodoUserCase from "../useCases/getTodo";
import removeTodoUserCase from "../useCases/removeTodo";
import updateTodoUserCase from "../useCases/updateTodo";

export default function TodoControllers(){
    const [todos, setTodos] = useState<TodoEntity[]>(initialStateTodos || []);
    const [filter, setFilter] = useState<string>("all");


    function getTodo(){
        return new getTodoUserCase(todos).getTodo(filter);
    }

    function createTodo(title:TodoEntity["title"]){
        setTodos(new createTodoUserCase(todos).createTodo(title));
    }
    function removeTodo(id:TodoEntity["id"]){
        setTodos(new removeTodoUserCase(todos).removeTodo(id));
    }
    function updateTodo(id:TodoEntity["id"]){
        setTodos(new updateTodoUserCase(todos).updateTodo(id));
    }
    function clearCompletedTodo(){
        setTodos(new clearCompletedTodoUserCase(todos).clearCompletedTodo());
    }
    function countCompletedTodo(){
        return new countCompletedTodoUserCase(todos).countCompletedTodo()
    }

    useEffect(()=>{
        localStorage.setItem("todos", JSON.stringify(todos));
    },[todos]);

    return {getTodo,
        createTodo,
        removeTodo,
        updateTodo,
        todos,
        clearCompletedTodo,
        countCompletedTodo,
        filter,
        setFilter}

   
}