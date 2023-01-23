import CrossIcon from "./icons/CrossIcon";

const TodoItem = ({todo}) => {
  const {id,title,completed} = todo;
  return (
    <article className="flex gap-4 border-b border-b-gray-400">
        <button className="rounded-full border-2 h-5 w-5 inline-block flex-none"></button>
        <p className="text-gray-600 grow">{title}</p>
        <button className="flex-none"><CrossIcon /></button>
    </article>
    );
}
export default TodoItem