const User=require("../models/User");

const appcontroller=(req,res)=>{

    ///All out business logic 
    // MAking query to db 

    res.send("From controller file");

}

const signupcontroller=(req,res)=>{
const user=new User({

    username:req.body.username,
    password:req.body.password
})
user.save().then(result=>{
    
    res.send("From controller file");
})

    console.log(req.body);



    ///All out business logic 
    // MAking query to db 


}



module.exports={
    appcontroller,
    signupcontroller
    

}