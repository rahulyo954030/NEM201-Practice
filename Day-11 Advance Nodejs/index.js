console.log("a");

setTimeout(() => {
    console.log("setTimeout");
}, 0);


console.log("Before the setImmediate call")

let timerID = setImmediate(() => {console.log("setImmediate")});
console.log("After the setImmediate call")

function myFunction(platform){
    console.log("Hi, Welcome to " + platform);
}

console.log("Before the setImmediate call")
let timerID2 = setImmediate(myFunction, "Educative");
console.log("After the setImmediate call")
for(let i=0; i<10; i++){
    console.log("Iteration of loop: "+i);
}

var interval = setInterval(doStuff, 0) 
function doStuff() {
  console.log("Set Interval");
  clearInterval(interval);
}