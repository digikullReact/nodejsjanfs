const mongoose=require("mongoose");


// Schema defines the attributes for our collections
const useSchema=new mongoose.Schema({


    username:{
        type:String
    },
    password:{
        type:String
    },


    

})


module.exports=mongoose.model("user",useSchema);