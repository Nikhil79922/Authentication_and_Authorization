const joi = require("joi")

const signUpValidator=(req,res,next)=>{
    const schema=joi.object({
    name:joi.string().min(3).max(20).required(),
    email:joi.string().email().required(),
    password:joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
    role:joi.string(),
})

const {error}=schema.validate(req.body)
if(error){
    res.status(400).send({message:"Bad Request for signup",error})

}
next()
}
const loginValidator=(req,res,next)=>{
    const schema=joi.object({
    email:joi.string().email().required(),
    password:joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
})

const {error}=schema.validate(req.body)
if(error){
    res.status(400).send({message:"Bad Request for login",error})

}
next()
}

module.exports={
    signUpValidator,
    loginValidator
}