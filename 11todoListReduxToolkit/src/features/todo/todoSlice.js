import { createSlice, nanoid } from "@reduxjs/toolkit";

//fetures are known as slices
// createSlice to create slices :) and nanoid to generate unique ids

const initialState = {
    todos:[{
        id: 1,
        text: "hello",
        completed: false
    }]
}

//Note: unlike context api where we can declare our function inside the context and then define it somewhere else
// in reduxtoolkit we have to declare and define it inside the same file

export const todoSlice = createSlice({// properties in slices are predefined eg: name
    name: 'todo',
    initialState, //state - which is assigned with the initialState
    reducers:{
        //we will get state and action as default parameters
        //in state we get the current state for eg: what is the data inside the current state (initialState)
        //in action we get the data which is passed or given
        addTodo: (state, action)=>{
            const todo= {
                id: nanoid(), 
                text: action.payload,
                completed: false
            }
            state.todos = [ todo, ...state.todos]
            //state.todos.push(todo)
        },
        removeTodo: (state, action)=>{
            state.todos = state.todos.filter((todo)=>(
                todo.id!==action.payload
            ))
        },
        updateTodo : (state, action)=>{
            state.todos = state.todos.map((todo)=>(
                todo.id===action.payload.id ? {...todo,text:action.payload.text} : todo
            ))
        },
        toggleTodo: (state, action)=>{
            state.todos = state.todos.map((todo)=>(
                todo.id===action.payload? {...todo, completed:!todo.completed} : todo
            ))
        }
    }
})
//to be passed to be used in components
export const {addTodo, removeTodo, updateTodo, toggleTodo} = todoSlice.actions

export const todoReducer = todoSlice.reducer // to be passed to Store