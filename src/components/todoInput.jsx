import { useState } from "react";
import { useDispatch } from "react-redux";
import {v4 as uuid} from "uuid";
import { addTodo } from "../redux/action";

const TodoInput = () =>{
    const [title , setTitle] = useState("");
    const dispatch = useDispatch();

    const handleClick = ()=>{
        const payload = {
            title,
            status:false,
            id:uuid()
        };
        
        const actionAdd = addTodo(payload);
        console.log(actionAdd)
        dispatch(actionAdd)
    }
    return(
        <div>
            <h3>
                TO DO APP IN REACT-REDUX
            </h3>
            <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Task..."/>
            <button onClick={handleClick}>Add</button>
        </div>
    )
}
export {TodoInput};