import 'bootstrap/dist/css/bootstrap.min.css';
import { UserContextProvider } from './context/userContext'
import ReactDOM from 'react-dom/client'
import React from 'react'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserContextProvider>
    <App />
    </UserContextProvider>
  </React.StrictMode>,
)
