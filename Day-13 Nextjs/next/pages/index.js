import Navbar from "../components/navbar"
import { useState } from 'react'
// import { useEffect} from 'react'


// export async function getServerSideProps(){
//   const res = await fetch("https://jsonplaceholder.typicode.com/todos")
//   const data = await res.json();

//   return{
//     props: {
//       todos: data
//     }
//   }
// }

export default function Home() {

   const [count, setCount] = useState(0)

// export default function Home({todos}) {
  // const [todos, setTodos] = useState([])

  // useEffect(()=>{
  //   const fetchTodos =async ()=>{
  //     const res = await fetch('https://jsonplaceholder.typicode.com/todos')
  //     const data = await res.json()
  //     setTodos(data)
  //   }
  //   fetchTodos()
  // },[])


  return (
    <div>
      {/* {todos?.length ===0 ?(
        <div>Loading.....</div>
      ) : (
        todos?.map((todo)=>{
          <div key={todo.id}>
          <p>
            {todo.id}:{todo.title}
          </p>
          </div>
        })
      )} */}

      <Navbar/>
     <div>
      <h3>Counter: {count}</h3>
     </div>
     <div>
      <button onClick={()=>setCount((p)=>p+1)}>Add 1</button>
     </div>
      
    </div>
  )
}
