//Root or Layout of our Application
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Home from './components/home/Home'
import { Outlet } from 'react-router-dom'
function App() {
  const [count, setCount] = useState(0)

// Outlet is used to so that we can keep the other components unchanged(here Header and Footer)
// and only update the changes inside of Outlet
  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App
