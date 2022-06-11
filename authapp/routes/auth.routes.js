const express=require("express");
const authrouter=express.Router();
const {signUp, login}=require("../controllers/auth.controller");
const {encryptPassword} =require("../middlewares/auth.middleware");

authrouter.get("/healthecheck",(req,res)=>{
    res.send("SuccessFullyworking")
});
authrouter.post("/signup",encryptPassword,signUp);
authrouter.post("/login",login);


module.exports=authrouter;