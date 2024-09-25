const express = require("express");
const route = express.Router();
const URL = require("../models/url");
const USER = require("../models/user");
const { restrictTo } = require("../middlewares/auth");

route.get("/", restrictTo(["USER","ADMIN"]), async (req, res) => {
  const userdata=await USER.find({email:req.user.email})
  const data = await URL.find({ createdBy: req.user._id })
  return res.render("home", { Alldata: data , UserInfo:userdata })
})

route.get("/Admin", restrictTo(["ADMIN"]), async (req, res) => {
  const userdata=await USER.find({email:req.user.email})
    const data = await URL.find({})
    return res.render("home", { Alldata: data ,UserInfo:userdata })
  })

route.get("/Login", (req, res) => {
  return res.render("Login")
})
route.get("/SignUp", (req, res) => {
  return res.render("SignUp")
})

module.exports = route

