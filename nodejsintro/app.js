const fs=require("fs");
/*require('dotenv').config() //just like import
let   name="Sanjay";
console.log(`Hello  world ${name}`)

console.log(process.env.URL)
*/
//yargv

//console.log(process.argv);
fs.readFile("./temp.js",'utf-8',(err,data)=>{
    console.log(data);
})