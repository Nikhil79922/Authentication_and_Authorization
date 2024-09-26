// const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcrypt');
const User = require("../models/user")
const {setUser}=require("../Services/auth")

async function handleSignupPage(req, res) {
    const { name, email, password, role } = req.body;
   let UserData= await User.create({
        name,
        email,
        password,
        role
    })
    UserData.password= await bcrypt.hash(password, 10)
    await UserData.save();

    res.status(200).render("Login")
}

async function handleLoginPage(req, res) {

    const { email, password } = req.body;
    const validUser = await User.findOne({ email })
    
    if (!validUser) {
        return res.status(400).render("Login")
    }
    const isPassword = await bcrypt.compare(password,validUser.password)

    if(!isPassword){
        return res.status(404).json({message:"Incorrect Paswword"})
    }
//Using Statefull Approach
//    const sessionId =uuidv4();


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