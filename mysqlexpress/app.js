const express=require("express");
const app=express();
const port=process.env.PORT || 5001
const User=require("./models/User");


app.use(express.json());

app.get("/",async(req,res)=>{
    try {
        const users = await User.findAll();
        res.json({
            message:"Success",
            data:users
        })
    } catch (error) {
        res.json({
            message:error,
           
        })
        
    }


})

app.put("/:id",async(req,res)=>{

    const id=req.params.id;

    const firstName=req.body.firstName;
    const lastName=req.body.lastName;
    try {
      // Change everyone without a last name to "Doe"
await User.update({ lastName: lastName ,firstName:firstName}, {
    where: {
      id: id
    }
  });
        res.json({
            message:"Success",
         
        })
    } catch (error) {
        res.json({
            message:error,
           
        })
        
    }


})

app.delete("/:id",async(req,res)=>{
    const id=req.params.id;
    try {
        
        await User.destroy({
            where: {
              id: id
            }
          });
          res.json({
            message:"SuccessFully Deleted",
         
        })

    } catch (error) {
        res.json({
            message:error,
           
        })
        
    }

})

app.post("/",async(req,res)=>{
  
    const firstName=req.body.firstName;
    const lastName=req.body.lastName;

    try {
        if(User){
            const jane = await User.create({ firstName: firstName, lastName: lastName });
            console.log("Jane's auto-generated ID:", jane.id);
            res.json({
                message:"Success",
                id:jane.id
            })

        }
        else{
            res.send("Problem with db connection");
        }
 
    
        
    } catch (error) {

        console.log(error);
        
    }

 


})


app.listen(port,async()=>{

 
    console.log("Server is up at port "+port )
})