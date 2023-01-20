const TodoCreate = () => {
  return (
    <form className="bg-white rounded-md overflow-hidden py-4 flex gap-4 items-center px-4">
      <span className="rounded-full border-2 h-5 w-5 inline-block"></span>
        <input 
        type="text" 
        placeholder="Create a new Todo.."
        className="w-full text-gray-400 outline-none"
        />
    </form>
);
}

export default TodoCreate;
