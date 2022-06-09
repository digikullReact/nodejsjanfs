const express=require("express");
const userrouter=express.Router();
const {getUserdata}=require("../controllers/user.controller");

const {allowAccess} =require("../middlewares/security.middleware");

userrouter.use(allowAccess);  //routes level middleware --->

userrouter.get("/",getUserdata)


module.exports=userrouter;