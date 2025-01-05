import React, { useEffect, useState } from 'react'
import Home from './pages/home/Home'
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import ProtectedRoute from './component/ProtectedRoute'
import { IsAuth } from './context/Authenticated'
import Categories from './component/Categories'
function Logout(){
  const navigate = useNavigate()
  useEffect(()=>{
    localStorage.setItem("token","")
    navigate("/login")
  },[])
 
}

const App = () => {
  const navigate = useNavigate()
  const [isAuth, setIsAuth] = useState()
  useEffect(() => {
    const token = localStorage.getItem("token")
    if(token===null && token===undefined && token===""){
      navigate("/login")
    }
    setIsAuth(token)
  }, [])
  return (

    <div>
      <IsAuth.Provider value={{ isAuth, setIsAuth }}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<ProtectedRoute Component={Home} />} />
          <Route path="/logout" element={<Logout/>}  />
          <Route path='/cat/:category' element={<Categories/>}/>
        </Routes>
      </IsAuth.Provider>

    </div>
  )
}

export default App