
import Header from "./components/Header";
import TodoComputed from "./components/TodoComputed";
import TodoCreate from "./components/TodoCreate";
import TodoList from "./components/TodoList";
import TodoControllers from "./controllers/TodoControllers";
import TodoFilter from "./components/TodoFilter";

const App = () =>{
  const {getTodo,createTodo,removeTodo,updateTodo,todos,clearCompletedTodo,countCompletedTodo,filter,setFilter} = TodoControllers();
  
  return (
    <div className="bg-[url('./assets/images/bg-mobile-light.jpg')] dark:bg-[url('./assets/images/bg-mobile-dark.jpg')] bg-contain bg-no-repeat bg-gray-300 min-h-screen dark:bg-gray-900">
      <Header />
      <main className="container mx-auto px-4 mt-8">
        <TodoCreate createTodo={createTodo}/>
        <TodoList todos={getTodo()} removeTodo={removeTodo} updateTodo={updateTodo}/>
        <TodoComputed countCompletedTodo={countCompletedTodo()} clearCompletedTodo={clearCompletedTodo}/>
        <TodoFilter filter={filter} setFilter={setFilter} />
      </main>
      <footer className="text-center mt-8 dark:text-gray-400">Drag and drop to reorder list</footer>
    </div>
  );
};

export default App;