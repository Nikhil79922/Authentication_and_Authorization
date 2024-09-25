
const User = require("../models/user")
const {setUser}=require("../Services/auth")

async function handleSignupPage(req, res) {
    const { name, email, password } = req.body;
    await User.create({
        name,
        email,
        password
    })
    res.status(200).render("Login")
}

async function handleLoginPage(req, res) {
    const { email, password } = req.body;
    const validUser = await User.findOne({ email, password })
    if (!validUser) {
        return res.status(400).render("Login")
    }
   const token = setUser(validUser)
       //cookies method
//    res.cookie('uid',token);

   //response method
res.json({token});
   return res.status(200).redirect("/")
}

module.exports = {
    handleSignupPage,
    handleLoginPage
}