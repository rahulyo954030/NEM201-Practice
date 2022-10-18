import React from 'react'
import axios from "axios"

const Signup = () => {
  return (
    <div>
        <form>
            <input type="text" placeholder='Enter Name...'/>
            <br />
            <input type="text" placeholder='Enter Email...'/>
            <br />
            <input type="text" placeholder='Enter Address...'/>
            <br />
            <input type="submit" value="SIGN UP" />
        </form>
    </div>
  )
}

export default Signup