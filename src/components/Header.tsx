
import React, { useEffect, useRef, useState } from 'react'
import Dropdown from './Dropdown';
import { FaUserCircle } from 'react-icons/fa';
// import logo from '../assets/images/ai-logo.svg'
const Header = ({ title }: { title?: string }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])
  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsDropdownOpen(false)
    }
  }

  return (
  <div className="header-container">
    <div className="d-flex align-items-center justify-content-between flex-row main_header">
      {/* <img src={logo} className="loginIcon" /> */}
      <h1 className="heading-text text-center text-dark text-uppercase">{title}</h1>
      <div onClick={() => setIsDropdownOpen(!isDropdownOpen)}  className="position-relative d-flex align-items-center justify-content-center flex-column dropMain" ref={dropdownRef}>
        <FaUserCircle className="profileIcon" style={{ cursor: 'pointer' }} />
        {isDropdownOpen && <Dropdown />}
      </div>
        </div>
          {/* <div className="borderImage" /> */}
  </div>
   
  )
}

export default Header
