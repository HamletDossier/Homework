const App = () =>{
  return (
    <div className="bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat bg-gray-300 min-h-screen">
      <header className="container mx-auto px-4 pt-8">
        <div className="flex justify-between">
          <h1 className="uppercase text-white text-3xl font-semibold tracking-[0.3em]">Todo</h1>
          <button>luna</button>
        </div>
        <form className="bg-white rounded-md overflow-hidden py-4 flex gap-4 items-center px-4 mt-8">
          <span className="rounded-full border-2 h-5 w-5 inline-block"></span>
            <input 
            type="text" 
            placeholder="Create a new Todo.."
            className="w-full text-gray-400 outline-none"
            />
        </form>
      </header>
      <main className="container mx-auto px-4">
        <article>
            <button>Circulo</button>
            <p>Complet App</p>
            <button>Equis</button>
        </article>
        <article>
            <button>Circulo</button>
            <p>Complet App</p>
            <button>Equis</button>
        </article>
        <article>
            <button>Circulo</button>
            <p>Complet App</p>
            <button>Equis</button>
        </article>
        <article>
            <button>Circulo</button>
            <p>Complet App</p>
            <button>Equis</button>
        </article>
        <article>
            <button>Circulo</button>
            <p>Complet App</p>
            <button>Equis</button>
        </article>

        <section>
          <span>5 items left</span>
          <button>Clear Completed</button>
        </section>
      </main>
      <section className="px-4 container mx-auto">
          <button>All</button>
          <button>Active</button>
          <button>Completed</button>
      </section>
      <p className="text-center">Drag and drop to reorder list</p>
    </div>
  );
};

export default App;