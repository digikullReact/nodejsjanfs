// Middlewares are function that have an access to req and response object and can modify them as per the requirement
const bcrypt = require('bcrypt');

const changeData=(req,res,next)=>{

    console.log("Middleware 1");
    

    // Two options in here 

    //1- I can just end the request response cycle by sending the response to the user

   // res.send("hello from middleware")

   // 2- transfer the flow to the next middleware in line 

   next();  // next is used to transfer control to the next middleware/controller/method inline



}

const changeData2=(req,res,next)=>{

    console.log("Middleware 2");

    // Two options in here 

    //1- I can just end the request response cycle by sending the response to the user

   // res.send("hello from middleware")

   // 2- transfer the flow to the next middleware in line 

   next();



}

const encryptPassword=(req,res,next)=>{

    // it gonna encrypt password coming in request 

    console.log(req.body);
    const password=req.body.password

    bcrypt.hash(password, 10, function(err, hash) {
        // Store hash in your password DB.

        if(err){
            res.send("Password not encoded");
        }
        else{
            req.body.password=hash;
         
            next();
        }

       
    });

   



}


const routesLevel=(req,res,next)=>{
    console.log("Routes level middleware--------");

    next();

}

const appLevel=(req,res,next)=>{
    console.log("App  level middleware--------");

    next();

}

module.exports={

    changeData,
    changeData2,
    encryptPassword,
    routesLevel,
    appLevel

}