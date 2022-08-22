import {useRouter} from "next/router"
import { useEffect,useState } from "react";


const URL = "https://jsonplaceholder.typicode.com/users"

export default function productDetails({userDetails}){
    // const [data, setData]= useState({})
    // const {productid} = useRouter().query;
    // useEffect(()=>{
    //     fetch(`${URL}/${productid}`)
    //     .then((x)=> x.json())
    //     .then((data)=>{
    //         console.log("data", data)
    //         setData(data)
    //     })
    // },[productid])

    return (
    <div>
        <div>
            Name: {userDetails.name}
        </div>
        <div>
            Email: {userDetails.email}
        </div>
    </div>
    )
}

export const getServerSideProps = async ()=>{
    const data = await fetch(`${URL}/1`).then((x)=>x.json())
    return {
        props :{
            userDetails: data
        }
    }
}