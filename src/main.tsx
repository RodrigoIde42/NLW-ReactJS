import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app.tsx'
import { Toaster } from 'sonner'
import './index.css'

ReactDOM.createRoot(document.body!).render(
  <React.StrictMode>
    <App />
    <Toaster richColors />
  </React.StrictMode>,
)
