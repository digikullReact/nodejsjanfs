const express=require("express");
const app=express();

const authrouter=require("./routes/auth.routes");
// /auth/login
// /auth/signup
app.use(express.json());

app.use("/auth",authrouter);


module.exports=app;