const express=require("express");
const approuter=express.Router();  // this returns a router obnject
const {changeData,changeData2,encryptPassword,routesLevel} =require("../middlewares/app.middleware");
const {appcontroller,signupcontroller} =require("../controllers/app.controller");
// Error handling middleware --->
/**
 * app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})
 */


approuter.use(routesLevel)  // routes level middleware which will be called  before any route defined in this file ---->
approuter.get("/",changeData,changeData2,appcontroller)  // route level middleware---->
approuter.get("/something",changeData,changeData2,appcontroller)  // route level middleware---->
approuter.post("/save",encryptPassword,signupcontroller)

module.exports=approuter;

