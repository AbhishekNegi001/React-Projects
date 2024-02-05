import { useState } from "react";
import { useDispatch } from 'react-redux'
import { addTodo } from "../features/todo/todoSlice"; 

function AddTodo() {
    const [input, setInput] = useState('')
    const dispatch = useDispatch()

    //dispatch is used to make changes to store using reducers
    const addTodoHandler =(e)=>{
        e.preventDefault()
        dispatch(addTodo(input))
        setInput('')// to clear the value inside input field
    }

    return (
        <form onSubmit={addTodoHandler} className="flex">
            <input
                type="text"
                value={input} // to connect the value with the input field
                onChange={(e)=>setInput(e.target.value)}
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default AddTodo;

