import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import FetchTodos from './1_FetchTodos.jsx'
import CleanUp from './CleanUp.jsx'

createRoot(document.getElementById('root')).render(
  <>
    <CleanUp />
  </>,
)
