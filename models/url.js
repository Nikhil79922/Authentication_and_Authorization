const { timeStamp } = require("console")
const mongoose=require("mongoose");
const { type } = require("os");

const Schema= new mongoose.Schema({
    ShortId:{
        type:String,
        required:true,
    },
    redirectUrl:{
        type:String,
        required:true,
    },
    visitHistory:[{timeStamp:{type:Number}}],
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user',
    }
},{timestamps:true})

const URL=mongoose.model("urls",Schema)

module.exports=URL;
