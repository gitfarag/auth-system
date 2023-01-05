import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home/home'
import Login from './pages/login/login'
import { AuthProvider } from 'react-auth-kit'
import { RequireAuth } from 'react-auth-kit'

function App() {
  return (
    <AuthProvider
    authType='cookie'
    authName='_auth'
    cookieDomain={window.location.hostname}
    cookieSecure={false}
    >

    <BrowserRouter>
      <Routes>
        <Route 
        path='/' 
        element={<RequireAuth loginPath='/auth/login'> <Home/> </RequireAuth>}/>

        <Route
         path='/auth/:type' 
         element={<Login />} />
      </Routes>
    </BrowserRouter>

     </AuthProvider>
  )
}

export default App
