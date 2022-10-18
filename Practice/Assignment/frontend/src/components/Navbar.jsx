import React from 'react'
import "./Navbar.css"
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
const Navbar = () => {
    const navigate = useNavigate()
    let token = JSON.parse(localStorage.getItem("token"))
    console.log(token)

    const logout =()=>{
      localStorage.removeItem("token")
      navigate("/")
    }

  return (
    <div className='navbar'>
        <h3 onClick={()=>navigate("/home")}>BMI</h3>
        {token===null?<h3 onClick={()=>navigate("/")}>SIGN UP</h3>:
        <h3 onClick={logout}>LOGOUT</h3>}
    </div>
  )
}

export default Navbar