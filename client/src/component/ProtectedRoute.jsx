import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

const ProtectedRoute = (props) => {
  console.log(props)
  const navigate = useNavigate()
  const { Component } = props
  return (
    <div>
      <Component />
    </div>
  )
}

export default ProtectedRoute