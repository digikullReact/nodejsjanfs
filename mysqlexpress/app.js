const express=require("express");
const app=express();
const port=process.env.PORT || 5001



const User=require("./models/User");



app.get("/",async(req,res)=>{

    try {
        const jane = await User.create({ firstName: "Jane", lastName: "Doe" });
        console.log("Jane's auto-generated ID:", jane.id);
        res.send("Inserted");
    
        
    } catch (error) {

        console.log(error);
        
    }

 


})


app.listen(port,async()=>{

 
    console.log("Server is up at port "+port )
})