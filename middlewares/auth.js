const { getUser } =require("../Services/auth")

async function restrictLogedInUserOnly(req,res,next){

  //response method
    const userId=req.headers['authorization'];
    const token=userId.split("Bearer ")[1]

    //cookies method
    // const userId=req.cookies.uid;

    if(!userId) return res.redirect("/Login")
      const user=getUser(token)
      // const user=getUser(userId)

    if(!user) return res.redirect("/Login")
    req.user=user;

    next();
}

async function checkAuth(req,res,next){

    //response method
  const userId=req.headers['authorization'];
  console.log(userId)
const token=userId.split("Bearer ")[1]

//cookies method
    // const userId=req.cookies.uid;


      const user=getUser(token)
      // const user=getUser(userId)

    req.user=user;

    next();
}

module.exports={
    restrictLogedInUserOnly,
    checkAuth,
}