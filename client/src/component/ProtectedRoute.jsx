import React from 'react'

const ProtectedRoute = (props) => {
    console.log(props)
    const {Component}  = props
  return (
    <div>
        <Component />
    </div>
  )
}

export default ProtectedRoute