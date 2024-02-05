import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodo from './components/AddTodos'
import TodoItem from './components/TodoItem'
import { useSelector } from 'react-redux'

function App() {
  const todos = useSelector((state)=>(state.todos))
/*
  useEffect(()=>{
    const todos = JSON.parse(localStorage.getItem("todos2")) //localStorage stores and sends data in form of string
    if(todos && todos.length>0){
      return;
    }
  },[])

  useEffect(()=>{
    localStorage.setItem("todos2", JSON.stringify(todos))
  },[todos])
*/
  return (
    <>
<div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        <AddTodo/>
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
    </>
  )
}

export default App
