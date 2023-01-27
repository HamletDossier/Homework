import { Droppable, Draggable } from '@hello-pangea/dnd';
import { TodoEntity } from "../domain/TodoEntity";
import { TodoStore } from "../domain/TodoStore";
import TodoItem from "./TodoItem";

const TodoList = ({todos, removeTodo, updateTodo}:{todos:TodoEntity[],removeTodo:any,updateTodo:any}) => {
  return (
    <Droppable droppableId='todos'>
      {
        (DroppableProvided) =>(

        <div ref={DroppableProvided.innerRef} {...DroppableProvided.droppableProps} className="bg-white rounded-t-md [&>article]:p-4 mt-8 overflow-hidden">
        {todos.map((todo,index)=> (
          <Draggable key={todo.id} index={index} draggableId={`${todo.id}`}>{
            (DraggableProvided) => (
              <TodoItem todo={todo} removeTodo={removeTodo} updateTodo={updateTodo} ref={DraggableProvided.innerRef} {...DraggableProvided.dragHandleProps} {...DraggableProvided.draggableProps}/>
            )}
          </Draggable>
        ))}
        {DroppableProvided.placeholder}
      
        </div>
        )
      }
    </Droppable>
);
}

export default TodoList;
