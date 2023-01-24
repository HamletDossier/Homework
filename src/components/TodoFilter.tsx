const TodoComputed = ({setFilter,filter}) => {
  return (
    <section className="container mx-auto mt-8">
      <div className="bg-white p-4 rounded-md flex justify-center gap-4">
        <button onClick={()=> setFilter("all")} className={`${filter == 'all' ? 'text-blue-500':'text-gray-400'}`}>All</button>
        <button onClick={()=> setFilter("active")}  className={`${filter == 'active' ? 'text-blue-500':'text-gray-400'}`}>Active</button>
        <button  onClick={()=> setFilter("completed")}  className={`${filter == 'completed' ? 'text-blue-500':'text-gray-400'}`}>Completed</button>
      </div>
    </section>);
}
export default TodoComputed;