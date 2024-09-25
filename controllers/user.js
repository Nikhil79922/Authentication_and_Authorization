// const { v4: uuidv4 } = require('uuid');
const User = require("../models/user")
const {setUser}=require("../Services/auth")

async function handleSignupPage(req, res) {
    const { name, email, password, role } = req.body;
    await User.create({
        name,
        email,
        password,
        role
    })
    res.status(200).render("Login")
}

async function handleLoginPage(req, res) {

    const { email, password } = req.body;
    const validUser = await User.findOne({ email, password })
    if (!validUser) {
    
        return res.status(400).render("Login")
    }
//Using Statefull Approach
//    const sessionId =uuidv4();

console.log(validUser)
//Using JWT approach
const token=setUser(validUser)
res.cookie('token',token);

// res.json({token})
   return res.status(200).redirect("/")
}

module.exports = {
    handleSignupPage,
    handleLoginPage
}