const express=require("express");

const mongoose=require("mongoose");

const UserModel=require("./models/User");
const json=require("./e.json");



mongoose.connect("mongodb://localhost:27017/janfsnodejs101").then(data=>{
    console.log("Database connected");
}).catch(err=>{
    console.log(err);
})

const app=express();
app.use(express.json());


// Saving the data inside the mongodb collection

app.post("/saveuser",(req,res)=>{
    const user=new UserModel({
        name:req.body.name,
        age:req.body.age,
        isValid:true,
        url:req.body.url,
        address:req.body.address

    })


    user.save().then(data=>{
        res.send("User got saved")
    }).catch(err=>{
        console.log(err);
    })

})


app.post("/savemultiple",(req,res)=>{

    UserModel.insertMany(req.body).then(data=>{
        res.json({message:"Saved"})
    }).catch(err=>{
        console.log(err);
    })

})

app.post("/savedata",(req,res)=>{

    UserModel.insertMany(json).then(data=>{
        res.json({message:"Saved"})
    }).catch(err=>{
        console.log(err);
    })


})




// Reading  all data from database

app.get("/getData",(req,res)=>{


    console.log(req.body);
   UserModel.find().then(data=>{
       res.json({
           message:"Success",
           data:data
       })
   }).catch(err=>{
       console.log(err);
   })


})


app.get("/check",(req,res)=>{

    return res.send("hello");
   // console.log("Executedd......")

})


// Reading one particular  data from database  


app.get("/getData/:age",(req,res)=>{

    UserModel.findOne({age:req.params.age}).then(data=>{
        res.json({
            message:"Success",
            data:data
        })
    }).catch(err=>{
        console.log(err);
    })
 
 
 })




 // Updating the data


 app.put("/change",(req,res)=>{

    UserModel.updateOne({_id:req.body.id},{$set:{name:req.body.name,age:req.body.age}}).then(data=>{

    res.json({
        message:"Data updated"
    })


    }).catch(err=>{
        console.log(err);
    })

 })


 // Deleting  single  data --->


 app.delete("/remove/:id",(req,res)=>{
     //console.log(req.body)

    UserModel.deleteOne({_id:req.params.id}).then(data=>{

        res.json({
            message:"Data deleted"
        })

    }).catch(err=>{
        console.error(err);
    })



 })





app.listen(9090,()=>{
    console.log("Server Running");
})