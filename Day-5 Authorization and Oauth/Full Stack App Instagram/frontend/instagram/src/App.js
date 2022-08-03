import {Routes,Route} from "react-router-dom"
import React from "react";
import Home from "./components/Home";
import Login from "./components/Login";
import Feed from "./components/Feed";


function App() {
  return (
    <div>
     <Routes>
     <Route path="/" element={<Home/>} />
     <Route path="/feed" element={<Feed/>} />
     <Route path="/login" element={<Login/>} />
     </Routes>
     
    
    </div>
  );
}

export default App;

/*
{
  "name": "Rahul",
  "username": "rahul1234",
  "email": "rahul@gmail.com",
  "password": "rahul",
  "mobile" : 8888888888,
  "country" : "India",
  "gender" : "Male"
}
*/