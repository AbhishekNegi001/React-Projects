//Root or Layout of our Application
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import { Outlet } from 'react-router-dom'
function App() {

// Outlet is so that we can keep the other components unchanged(here Header and Footer)
// and only update the changes inside of Outlet
// Outlet is used so that we can do nesting inside of <Outlet/> using react-router-dom
  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App
