import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App'
import Context from './Context/Context'

createRoot(document.getElementById('root')).render(
  <Context>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </Context>
)
