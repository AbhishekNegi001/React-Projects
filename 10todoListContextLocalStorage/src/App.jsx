import { useEffect, useState } from 'react'
import { TodoContextProvider } from './context/TodoContext'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'

function App() {

  const [todos, setTodos] = useState([])

//when we give a callback inside the setfunction of useState we get previous state value as a default argument
  const addTodo = (todo)=>{
    setTodos((prev)=>[{id: Date.now(), ...todo}, ...prev]) 
    //{id: Date.now, ...todo} it will take id: Date.now and spread the other values of todo 
    //[{ }, ...prev] it will take the object and spread the values of prev after it
  }

  //arrow function without braces or with parenthese automatically returns the evaluated expression
  const updateTodo =(id, todo)=>{
    setTodos((prev)=>prev.map((prevTodo)=>(
      prevTodo.id===id? todo:prevTodo
    )))
  }

  const deleteTodo = (id)=>{
    setTodos((prev)=>prev.filter((prevTodo)=>(prevTodo.id!=id)))
  }

  const toggleComplete = (id)=>{
    //{...prevTodo, completed: true} will take all the values of prevTodo and will override completed
    setTodos((prev)=>prev.map((prevTodo)=>(
      prevTodo.id===id? {...prevTodo, completed: !prevTodo.completed}:prevTodo
      )))
  }

  useEffect(()=>{
    const todos = JSON.parse(localStorage.getItem("todos")) //localStorage stores and sends data in form of string
    if(todos && todos.length>0){
      setTodos(todos)
    }
  },[])

  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todos))
  },[todos])

  return (
    <TodoContextProvider value={{todos, addTodo, deleteTodo, updateTodo, toggleComplete}}>
<div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        <TodoForm/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {todos.map((todo)=>(
                          <div key={todo.id} className='w-full'>
                            <TodoItem todo={todo}/>
                          </div>// when looping through components we should specify the key 
                          //to tell on which basis changes has to be made in DOM
                        ))}
                    </div>
                </div>
            </div>
    </TodoContextProvider>
  )
}

export default App
