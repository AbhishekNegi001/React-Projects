import { useEffect, useState } from 'react'
import './App.css'
import Card from './components/card/Card'
import ThemeButton from './components/themeButton/ThemeButton'
import { ThemeContextProvider } from './context/ThemeContext'

function App() {
  const [themeMode, setThemeMode] = useState('light')

  //we can declare the properties of values directly here
  const  lightTheme = ()=>{
    setThemeMode('light')
  }
  const darkTheme = ()=>{
    setThemeMode('dark')
  }

  useEffect(()=>{
    document.querySelector('html').classList.remove("light","dark")
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])
  return (
    <>
      <ThemeContextProvider value={{themeMode, darkTheme, lightTheme}}>
            <div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        <ThemeButton></ThemeButton>
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                       <Card></Card>
                    </div>
                </div>
            </div>

      </ThemeContextProvider>
    </>
  )
}

export default App
