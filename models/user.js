const mongoose=require("mongoose")

const Schema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
},{timestamps:true})

const User=mongoose.model("users",Schema);
module.exports=User;