
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../pages/Login'
import Dashboard from '../pages/Dashboard'
import Register from '../pages/Register'
import BirthdaySurprise from '../pages/BirthdaySurprise'

const RoutesComponents = () => {
  return (
    <Routes>
      {/* <Route path="/addCarModel" element={<AddCarModel />} />
      <Route path="/" element={<Login />} /> */}
 <Route path="/" element={<Login />} />
 <Route path="/dashboard" element={<Dashboard />} />
 <Route path="/registeryyyy" element={<Register />} />
 <Route path="/birthday" element={<BirthdaySurprise />} />


    </Routes>
  )
}

export default RoutesComponents
