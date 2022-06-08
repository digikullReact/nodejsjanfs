const mongoose=require("mongoose");


// Schema defines the attributes for our collections
const useSchema=new mongoose.Schema({


    name:{
        type:String
    },


    age:{
        type:Number
    },

    isValid:{
        type:Boolean
    },
    url:{
        type:String
    },
    address:{
        type:Object
    }

})


module.exports=mongoose.model("user",useSchema);