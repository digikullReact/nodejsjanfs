// Express is a web framework for node js ---
// That helps us reduce the complexity of api creation
// it provides better apporach and better utility which was not offered
// by node js http module 
// sails

// web applocation server

// we dnt need to use node js http module anymore
//const dotenv=require("dotenv");
//dotenv.config();  // this config methods loads the env file for you
require("dotenv").config()  //
const express=require("express");  // It loads the express package and assigns it to the express variable
const port =process.env.PORT || 9091
const cors=require("cors");
const path=require("path");
const data=[

]

//the above express variable is a function actually 
// 1-65356


const app=express() ; // calling express function returns us with the app object which we use to create server and routes

//console.log(express.json())
app.use(express.urlencoded({extended:true}))  // used when submitting the form in html or template engines
// For react /angular /vue generally you send the data in json 

// app.use is used to bind the middleware
app.use(express.json());// express.json is a middleware ,this middleware will parse the json body to something which node js /express understands
app.use(cors()) // middleware use

// Root route (/)


// Route handler
app.get("/",(req,res,next)=>{
   // res.send("hello world");// this will send the response to the user
//res.write("hello there");

//res.end()

   res.send("Hey there I am from express !!") //--> res.write() + res.end() from http module node js

})

// app.get is for getting the request
app.get("/user",(req,res,next)=>{
    // res.send("hello world");// this will send the response to the user
 //res.write("hello there");
 
 //console.log(req.query);
 //res.end()
 //
    res.send(data); //--> res.write() + res.end() from http module node js
 
 })
 
 // The post route 

 app.post("/savedata",(req,res)=>{
   // Are already provided to us by express 
   // for getting the data 
   // console.log(req.body);
    //console.log(req.query);
    //console.log(req.params);
    // cosnole.log(req.headers);

     ///


     // res.send can send anytype of data -json ,html ,text
    // res.send({
        // name:"Hello"
    // });
    // you can only send json
     res.json({
         name:"hey there"
     })

     // res.send()
     // res.json({}) // especially for json data
     //res.render() // for template engines
     // res.sendFile()  // for sending html files
     // res.redirect("") // for redirecting to another routes
 })


// If you want to start the web application server 

//  ---->Post routes --->
// for getting the data

app.post("/post",(req,res)=>{
   // console.log(req.query);

    //--->
    //console.log(req.body);
    data.push(req.body);

    res.send(req.body);

})


/// How to send a file in express --->

app.get("/html",(req,res)=>{
   // res.send()
// this actually 
console.log();
  // res.sendFile(__dirname+"/views/dashboard.html");--->should not use this syntax might throw error in different os
   /// __dirname gives you the absolute path of your current directory

   res.sendFile(path.join(__dirname,"pages","dashboard.html"))
})



app.get("/download",(req,res)=>{
    res.sendFile(path.join(__dirname,"views","net-http.pdf"))



})



app.listen(port,()=>{
    console.log(`Server Running At port ${port}`)
})

