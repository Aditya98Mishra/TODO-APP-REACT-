import { useDispatch, useSelector } from "react-redux"
import { deleteTodo, statusTodo } from "../redux/action";

export const TodoList = () =>{
    const todos = useSelector((state)=>state.todos);
    const dispatch = useDispatch()
    const handleDelete = (id)=>{
        const Delete = deleteTodo(id) 
        dispatch(Delete)
    }
    const handleStatus = (id)=>{
             const Status = statusTodo(id)
             dispatch(Status)
    }
    const statuss=(item)=>{
       return item ? "True" : "False"
    }
    console.log(todos)
    return(
        <div className="itemsinput">
          {todos.map((item) =>(
              <div key={item.id}>
              <h2>{item.title}</h2>
              <h3>{statuss(item.status)}</h3>
              <button onClick={ ()=> handleDelete(item.id)}>Delete</button>
              <button onClick={()=> handleStatus(item.id)}>Change Status </button>
              </div>
          ))}
          
        </div>
    )
}