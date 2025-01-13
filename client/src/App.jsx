import React, { useEffect, useState } from 'react'
import Home from './pages/home/Home'
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import ProtectedRoute from './component/ProtectedRoute'
import Categories from './component/Categories'
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import Logout from './component/Logout'


const App = () => {
  const [isAuth, setIsAuth] = useState()
  const navigate = useNavigate()
  useEffect(() => {
    const token = localStorage.getItem("token")
    if (!token) {
      navigate("/")
    }


    setIsAuth(token)
  }, [navigate])
  return (

    <div>
      <ToastContainer />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<ProtectedRoute Component={Home} />} />
          <Route path="/logout" element={<Logout />} />
          <Route path='/cat/:category' element={<Categories />} />
          <Route path='/logout' element={<Logout />} />
        </Routes>

    </div>
  )
}

export default App