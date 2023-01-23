import { useState } from "react";
import Header from "./components/Header";
import TodoComputed from "./components/TodoComputed";
import TodoCreate from "./components/TodoCreate";
import TodoFilter from "./components/TodoFilter";
import TodoList from "./components/TodoList";

const initialStateTodos = [
  {id:1, title: "Complete App", completed:true},
  {id:2, title: "Go to the gym", completed:false},
  {id:3, title: "10 minutos meditation", completed:false},
  {id:4, title: "Pick up", completed:false},
  {id:1, title: "Complete todo app on Frontend mentor", completed:false}
  
]
const App = () =>{
  const [todos, setTodos] = useState(initialStateTodos);
  const createTodo = (title:string) =>{
    const newTodo = {id:Date.now(),title, completed:false}
    setTodos([...todos,newTodo]);
  }
  return (
    <div className="bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat bg-gray-300 min-h-screen">
      <Header />
      <main className="container mx-auto px-4 mt-8">
        <TodoCreate createTodo={createTodo}/>
        <TodoList todos={todos} />
        <TodoComputed />
        <TodoFilter />
      </main>
      <footer className="text-center mt-8">Drag and drop to reorder list</footer>
    </div>
  );
};

export default App;