import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import './index.css'


// import { Padre } from './07-tarea-memo/Padre.jsx'
// import './08-useReducer/intro-reducer.js'
// import { TodoApp } from './08-useReducer/TodoApp.jsx'
import { MainApp } from './09-useContext/MainApp.jsx'


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      <MainApp />
    </StrictMode>
  </BrowserRouter>,
)
