import express from "express";  // es6
const app=express();

/*const express=require("express");

const port=process.env.PORT || 9091
const fs=require("fs/promises");  //common js --
const os=require("os");

app.use(express.json());


app.get("/fetchdata",(req,res)=>{
  //  let data="Inital value";
  console.log("First one ---",+ new Date());
    fs.readFile("./files/userdata.txt",'utf-8').then(result=>{
        res.send(result);

    }).catch(err=>{
        console.log(err);
    })
        
})

    //console.log("Just befor response",+ new Date())

 
 




app.post("/savedata",(req,res)=>{

    const data=req.body.name+os.EOL;
    //console.log(data);

    fs.appendFile("./files/userdata.txt",data).then(result=>{

        res.json({
            message:"Data saved"
        })

    }).catch(err=>{
        console.log(err)
    })



 })


 */

 app.listen(9099,()=>{
     console.log("server running")
 })