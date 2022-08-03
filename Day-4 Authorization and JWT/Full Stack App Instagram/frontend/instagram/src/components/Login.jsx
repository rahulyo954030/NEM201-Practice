import React from 'react'
import { useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'


const Login = () => {
    const [formData, SetFormData] =useState({})
    const nav = useNavigate()

    const handleChange =(e)=>{
        const {value, name} = e.target
        SetFormData({
          ...formData,
          [name]:value,
        })
    }
    const handleLogin= async()=>{
       try{
        const {data} = await axios.post("http://localhost:8080/auth/login", formData)
       const user = data[0]
       localStorage.setItem("userid", user["_id"]);
       nav("/feed")
       }
       catch (err){
        if(err.response.status ===401){
          alert("Invalid Credentials")
        }
       }
    }
  return (
    <div>
        <input type="text" name='username' placeholder='username' onChange={handleChange} />
        <input type="text" name='password' placeholder='password' onChange={handleChange} />
        <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Login