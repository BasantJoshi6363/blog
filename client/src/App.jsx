import React, { useState } from 'react'
import Home from './pages/home/Home'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import { AuthContext } from './context/AuthContext'

const App = () => {
  const [isAuth, setIsAuth] = useState("")
  return (
    <div>
      <AuthContext.Provider value={{ isAuth, setIsAuth }}>
        

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </AuthContext.Provider>
    </div>
  )
}

export default App