import Link from "next/link"


const data =[
    {
        id : 1,
        name: "Camera"
    },
    {
        id : 2,
        name: "Laptop"
    },
    {
        id : 3,
        name: "Mobile"
    }
]

export default function products(){
    return <div>
                    {data.map((p)=> 
                    <div key={p.id}>
                        <Link href={`/products/${p.id}`}>{p.name}</Link>
             </div>
        
        )}
    </div>
}