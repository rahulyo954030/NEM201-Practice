export default function handler(req,res){
    if(req.method==="POST"){

    }else{
        res.status(200).send([1,2,3,4])
    }
}