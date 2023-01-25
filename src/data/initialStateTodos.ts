import { TodoEntity } from "../domain/TodoEntity";

const initialStateTodos:TodoEntity[] = [
    {id:1, title: "Complete App", completed:true},
    {id:2, title: "Go to the gym", completed:false},
    {id:3, title: "10 minutos meditation", completed:false},
    {id:4, title: "Pick up", completed:false},
    {id:5, title: "Complete todo app on Frontend mentor", completed:false}
]

export default initialStateTodos;