import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


let initialdata = {
  email: "",
  password: "",
};
const Login = () => {
  const navigate = useNavigate();

  const [logindata, setLogindata] = useState(initialdata);

  const handlechange = (e) => {
    const { name, value } = e.target;
    setLogindata({ ...logindata, [name]: value });
  };
  const submit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/auth/login", logindata)
      .then((res) => {
        let token  = res.data.token
        localStorage.setItem("token", JSON.stringify(token))
        setLogindata({ ...initialdata });
       
        console.log(logindata, token)
       
          navigate("/home");
       
        
      })
      .catch((e) => {
       console.log(e)
      });
  };

  return (
    <div >
      <h2>Login Account</h2>
      <form onSubmit={submit} >
        <br />
        <h5>Username</h5>
        <input
          type="text"
          placeholder="email..."
          name="email"
          value={logindata.email}
          onChange={handlechange}
          required
        />
        <br />
        <h5>Password</h5>
        <div >
          <input
            type= "text" 
            placeholder="password..."
            name="password"
            value={logindata.password}
            onChange={handlechange}
            required
          />

        </div>
        <input type="submit" value="LOGIN" />
        <br />
        <p  onClick={()=>navigate("/signup")}>Create new account</p>
      </form>
     
    </div>
  );
};

export default Login;