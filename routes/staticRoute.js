const express=require("express");
const route=express.Router();
const URL = require("../models/url")

route.get("/", async (req,res)=>{
const data= await URL.find({})
  return res.render("home",{Alldata: data})
})
module.exports=route

