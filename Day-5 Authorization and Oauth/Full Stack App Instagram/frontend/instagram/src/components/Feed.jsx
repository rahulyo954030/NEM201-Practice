import axios from 'axios';
import React from 'react'
import { useRef } from 'react';
import { useState,useEffect } from 'react';

const Feed = () => {
  const [data, setData] = useState({})
  const [feeds, setFeeds] = useState([])
  const inputFile =useRef()

  useEffect(()=>{
    const userid = localStorage.getItem("userid")
    axios.get(`http://localhost:8080/profile/${userid}/feed`).then(({data})=>{
      setFeeds(data)
    })
  },[])

  const handleChange =(e)=>{
    const {name,value}= e.target;
    setData({
      ...data,
      [name]: value
    })
  }

  const handleSubmit =(e)=>{
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", data.title)
    formData.append("description", data.description)
    formData.append("tags", data.tags)
    formData.append("image", inputFile.current.files[0])
    const userId = localStorage.getItem("userid")
    axios.post(`http://localhost:8080/profile/${userId}/feed`, formData,{
      headers:{"content-Type" : "multipart/form-data"}
    })
  }
  
  return (
    <div>
      <form onSubmit={handleSubmit} >
        <input type="text" name="title" onChange={handleChange} placeholder='Enter Title'/>
        <input type="text" name="description" onChange={handleChange} placeholder='Description'/>
        <input type="text" name="tags" onChange={handleChange} placeholder='tags'/>
        <input type="file" ref={inputFile} />
        <input type="submit" value={"New Post"}/>
      </form>
      <hr />

    {feeds.map((f,i)=>(
      <div key={i}>
        <h1>{f.title}</h1>
        <p>{f.description}</p>
        <span>{f.tags}</span>
        <img height={200} width={200} src={`http://localhost:8080/static/${f.image}`} alt="image" />
      </div>
    ))}

    </div>
  )
}

export default Feed