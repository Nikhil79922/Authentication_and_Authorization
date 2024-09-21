const { timeStamp } = require("console")
const mongoose=require("mongoose")

const Schema= new mongoose.Schema({
    ShortId:{
        type:String,
        required:true,
    },
    redirectUrl:{
        type:String,
        required:true,
        unique:true
    },
    visitHistory:[{timeStamp:{type:Number}}],
},{timestamps:true})

const URL=mongoose.model("urls",Schema)

module.exports=URL;
