const express=require("express");
const route=express.Router();
const {handleLoginPage,handleSignupPage}=require("../controllers/user")

route.post("/SignUp", handleSignupPage )

route.post("/Login", handleLoginPage )

module.exports=route
