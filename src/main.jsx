import React from 'react'
import ReactDOM from 'react-dom/client'
import { Principal } from './Principal'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { AppContext } from './context/AppContext'


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AppContext>
      <React.StrictMode>
        <Toaster />
        <Principal />
      </React.StrictMode>
    </AppContext>
  </BrowserRouter>
)
