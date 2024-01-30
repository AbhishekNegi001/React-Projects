import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const value = ' variable injection in react element'
const ReactElement = React.createElement(
  'a',
  {
    href : 'https://google.com',
    target : '_blank'
  },
  'Click to open Google 3',
  value
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode> //In Strict mode we can only use React tags inside not the functions or objects
)

/*
ReactDOM.createRoot(document.getElementById('root')).render(
  ReactElement //In Strict mode we can only use React tags inside not the functions or objects
)
//we can also directly use this as <App/> is just like a function and it replaces html contant with it

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div>
      <a href="https://google.com" target="_blank">Click to open google 2</a>
    </div>
  </React.StrictMode>,
)
 */