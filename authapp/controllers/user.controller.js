const User=require("../models/User");
const getUserdata=(req,res)=>{

    User.find().then(response=>{
            // Will be querying the data
    res.json({
        message:"Success",
        data:response
    })


    })


}


module.exports={
    getUserdata

}