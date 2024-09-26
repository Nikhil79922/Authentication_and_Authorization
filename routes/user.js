const express=require("express");
const route=express.Router();
const {handleLoginPage,handleSignupPage}=require("../controllers/user")
const {signUpValidator,loginValidator}=require("../middlewares/authvalidator")

route.post("/SignUp",signUpValidator, handleSignupPage )

route.post("/Login",loginValidator, handleLoginPage )

module.exports=route
