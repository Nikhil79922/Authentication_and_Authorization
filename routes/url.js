const express=require("express");
const route=express.Router();
const {handleUrlPost,handleShortedURl,handleURlClicks}=require("../controllers/url")


route.post("/",handleUrlPost)

route.get("/:urlID",handleShortedURl)

route.get("/analytics/:urlID",handleURlClicks)

module.exports=route;