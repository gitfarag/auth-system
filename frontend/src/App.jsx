import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home/home'
import Login from './pages/login/login'
import { UserContext } from './context/userContext'
import { useContext } from 'react'
import { Navigate } from 'react-router-dom'

function App() {
  const {isAuth} = useContext(UserContext)
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' 
        element={ isAuth?<Home/>:<Navigate to={'/auth/login'}/>} />
        <Route path='/auth/:type' element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
