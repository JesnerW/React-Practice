import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Padre } from './07-tarea-memo/Padre.jsx'

// import './08-useReducer/intro-reducer.js'
import { TodoApp } from './08-useReducer/TodoApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TodoApp />
  </StrictMode>,
)
