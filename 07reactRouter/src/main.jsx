import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './components/home/Home.jsx'
import About from './components/about/About.jsx'
import Contact from './components/contact/Contact.jsx'
import User from './components/user/User.jsx'
import GitHub from './components/github/Github.jsx'

//npm i react-router-dom to install react-router-dom

//method 1 to create router
/*
const router = createBrowserRouter([
  {
    path: '/', // root path
    element: <App/>,
    children: [
      {
        path: "", // /+'' = /
        element: <Home/>
      }, 
      {
        path: 'about', //  / + about = /about
        element: <About/>
      },
      {
        path: 'contact', //  / + contact = /contact
        element: <Contact/>
      }
    ]
  }
])
*/
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='' element={<Home/>}></Route>
      <Route path='about' element={<About/>}></Route>
      <Route path='contact' element={<Contact/>}></Route>
      <Route path='user/:userid' element={<User/>}></Route>
      <Route path='github' element={<GitHub/>}></Route>
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
