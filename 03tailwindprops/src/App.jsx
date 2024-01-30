import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const myObj = {
    username : 'Abhishek',
    Age : 21
  }
  let newArr = [1,2,3];
  
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>03. Tail Wind and Properties</h1>
      <Card author='Abhishek Negi' ></Card>
      <Card author='Abhi Negi' ></Card>
    </>
  )
}

export default App
