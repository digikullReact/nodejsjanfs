const errorMiddleware=(err,req,res,next)=>{

   // console.log(err);

    res.status(400).json({
        message:err.message
       
    });

}

module.exports=errorMiddleware;