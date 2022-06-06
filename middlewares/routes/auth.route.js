const express=require("express");
const { append } = require("express/lib/response");
const authrouter=express.Router();  // this returns a router obnject
const {changeData,changeData2,encryptPassword,routesLevel} =require("../middlewares/app.middleware");


authrouter.use(routesLevel) 


authrouter.get("/",(req,res)=>{
    res.send("I am from auth route");
})


authrouter.get("/hello",(req,res)=>{
    res.send("I am from auth route hello");
})

module.exports=authrouter;

