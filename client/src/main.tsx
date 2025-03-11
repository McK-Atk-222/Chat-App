import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { AuthContextProvider } from './context/authContext.tsx'
import SocketContextProvider from './context/socketContext.tsx'
import { BrowserRouter } from "react-router-dom"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <AuthContextProvider>
      <SocketContextProvider>
       <App />
      </SocketContextProvider>
    </AuthContextProvider>
    </BrowserRouter>
  </StrictMode>,
)
