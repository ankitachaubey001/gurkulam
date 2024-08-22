
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../pages/Login'
import Dashboard from '../pages/Dashboard'
import Register from '../pages/Register'

const RoutesComponents = () => {
  return (
    <Routes>
      {/* <Route path="/addCarModel" element={<AddCarModel />} />
      <Route path="/" element={<Login />} /> */}
 <Route path="/" element={<Login />} />
 <Route path="/dashboard" element={<Dashboard />} />
 <Route path="/registeryyyy" element={<Register />} />


    </Routes>
  )
}

export default RoutesComponents
