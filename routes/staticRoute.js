const express=require("express");
const route=express.Router();
const URL = require("../models/url")

route.get("/", async (req,res)=>{
  if(!req.user){
   return res.redirect("/Login")
  }

const data= await URL.find({createdBy:req.user._id})
  return res.render("home",{Alldata: data})
})

route.get("/Login",(req,res)=>{
  return res.render("Login")
})
route.get("/SignUp",(req,res)=>{
  return res.render("SignUp")
})

module.exports=route

