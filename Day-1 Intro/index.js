[
    {
        "name":"john",
        "age":23,
        "tech":["react","js"]
    },
    {
        "name":"batman",
        "age":23,
        "tech":["java","js"]
    },
    {
        "name":"flash",
        "age":23,
        "tech":["redux","js"]
    },
]
/* 
<-------------------Array Operators------------------------>

all 


elemMatch - element match
db.users.find({kills:{$elemMatch:{$eq:100}}})
db.users.find({kills:{$elemMatch:{$lte:30, $gte:5}}})
db.users.find({kills:{$elemMatch:{$gt:-1}}})
db.users.find({kills:{$elemMatch:{$gte:0}}})

size - counts of objects
db.users.find({kills:{$size:2}})  

inc - to increase value and decrease
db.users.updateOne({name:"bgatman"}, {$inc:{age:1}})
db.users.updateOne({name:"bgatman"}, {$inc:{age:-1}})

set - to set data
db.users.updateOne({name:"bgatman"}, {$set:{age:10}})

min - to update minimun value
db.users.updateOne({name:"bgatman"}, {$min:{age:5}})

max - to update maximun value
db.users.updateOne({name:"bgatman"}, {$min:{age:15}})

rename - to update key name
db.users.updateOne({name:"bgatman"}, {rename:{tech:"skills", age:"Age"}})


pop - pop in array (array pop)
db.users.updateOne({name:"bgatman"}, {$pop:{kills:-1}})    1st element
db.users.updateOne({name:"bgatman"}, {$pop:{kills:1}})     last element

push - push in array (array push)
db.users.updateOne({name:"bgatman"}, {$push:{kills:50}})    

sort
db.users.updateOne({name:"irorman"}, {$sort:{kills:1}})   

*/