import UserContextProvider from './context/UserContextProvider'
import './App.css'
import Login from './components/login/Login'
import Profile from './components/profile/Profile'

function App() {
  
  return (
    <>
    <UserContextProvider>
      <h1>Heeeellllooooo</h1>
      <Login></Login>
      <Profile></Profile>
    </UserContextProvider>
      
    </>
  )
}

export default App
