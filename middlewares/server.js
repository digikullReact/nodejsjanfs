const express=require("express");

const app=express();

const approuter=require("./routes/app.route");
const authrouter=require("./routes/auth.route");
const {appLevel} =require("./middlewares/app.middleware");

const port =process.env.PORT || 9091;

// app level middleware

app.use(express.json());

app.use(appLevel)  // using custom app level middleware 


// three ways in which you can use middlewares

//1- route level
// 2- routes level
//3- app level


// how you are placing your routes is very important
app.use("/auth",authrouter)
app.use("/",approuter)









//app.use("/products",authrouter)

//app.use("/payment",authrouter)




app.listen(port,()=>{
    console.log(`Server is running at port ${port}`);
})