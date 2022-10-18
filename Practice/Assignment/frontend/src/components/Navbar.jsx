import React from 'react'
import "./Navbar.css"
import { useNavigate } from 'react-router-dom'
const Navbar = () => {
    const navigate = useNavigate()

  return (
    <div className='navbar'>
        <h3 onClick={()=>navigate("/")}>BMI</h3>
        <h3 onClick={()=>navigate("/signup")}>SIGN UP</h3>
        <h3 onClick={()=>navigate("/")}>LOGOUT</h3>
    </div>
  )
}

export default Navbar