import React, { useContext } from 'react'
import { IsAuth } from '../context/Authenticated'
import { useNavigate } from 'react-router-dom'

const ProtectedRoute = (props) => {
  console.log(props)
  const navigate = useNavigate()
  const { Component } = props
  const { isAuth } = useContext(IsAuth)
  return (
    <div>
      {isAuth ? (<Component />) : (navigate("/login"))}
    </div>
  )
}

export default ProtectedRoute