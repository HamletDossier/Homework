const TodoComputed = () => {
  return (
    <section className="container mx-auto mt-8">
      <div className="bg-white p-4 rounded-md flex justify-center gap-4">
        <button className="text-blue-500">All</button>
        <button className="hover:text-blue-500">Active</button>
        <button className="hover:text-blue-500">Completed</button>
      </div>
    </section>);
}
export default TodoComputed;