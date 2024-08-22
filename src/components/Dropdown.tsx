import React from 'react'
import { useNavigate } from 'react-router-dom'
import { getAuth } from 'firebase/auth';
import { RiLogoutCircleLine } from 'react-icons/ri';

const Dropdown = () => {
  const navigate = useNavigate()
  const auth = getAuth();
  const handleLogout = async () => {
    try {
      await auth.signOut();
      console.log('User signed out!');
      localStorage.clear()
      navigate("/")
    } catch (error) {
      console.error('Error signing out: ', error);
    }
  };
  return (
    <div className="dropdown-content">
      <div className="dropdown d-flex align-items-center gap-2">
        <RiLogoutCircleLine className='delectIcon mt-1' />
        <a onClick={handleLogout} className="w-100">
          Logout
        </a>
      </div>
    </div>
  )
}
export default Dropdown
