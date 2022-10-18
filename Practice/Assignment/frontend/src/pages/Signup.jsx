import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";



let initialdata = {
  name: "",
  email: "",
  password: "",
};
const Signup = () => {
  const navigate = useNavigate();
  const [signupdata, setSignupdata] = useState(initialdata);

  const handlechange = (e) => {
    const { name, value } = e.target;
    setSignupdata({ ...signupdata, [name]: value });
  };
  const submit = (e) => {
    e.preventDefault();
    
    setSignupdata({ ...initialdata });
    axios
      .post("http://localhost:8080/auth/signup", signupdata)
      .then((res) => {
       
        setSignupdata({ ...initialdata });
        navigate("/login");
      })
      .catch((e) => console.log(e));
  };
  return (
    <div >
      <h2>Create Account</h2>
      <form onSubmit={submit} >
        <h5>Your name</h5>
        <input
          type="text"
          placeholder="name..."
          name="name"
          value={signupdata.name}
          onChange={handlechange}
          required
        />
        <br />
        <h5>Email</h5>
        <input
          type="text"
          placeholder="email..."
          name="email"
          value={signupdata.email}
          onChange={handlechange}
          required
        />
        <br />
        <h5>Password</h5>
        <input
          type="text"
          placeholder="password..."
          name="password"
          value={signupdata.password}
          onChange={handlechange}
          required
        />
        <br />
        <input  type="submit" value="SIGN UP" />
        <p  onClick={()=>navigate("/login")}>Click here if you have already an account</p>
      </form>
    </div>
  );
};

export default Signup;