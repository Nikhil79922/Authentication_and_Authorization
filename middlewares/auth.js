const { getUser } = require("../Services/auth")

function CheckForAuthentication(req, res, next) {

  const tokenvalue = req.cookies.token;
  req.user=null
  if (!tokenvalue) return next()
  const token = tokenvalue;
  const user = getUser(token)
  if(!user){
   res.clearCookie("token")
    return res.status(401).redirect("/Login");
  }
  req.user = user;
  next();
}

function restrictTo(role=[]){
  return function(req,res,next){
    if(!req.user){
      return res.redirect("/Login")
    }
    if(!role.includes(req.user.role)){
      return res.end("UnAuthorized ----> Only For Admin's")
    }

    return next()
  }
}

// async function restrictLogedInUserOnly(req, res, next) {

//   const userId = req.headers['authorization']
//   if (!userId) return res.redirect("/Login")

//   const token = userId.split("Bearer ")[1];
//   // const userId=req.cookies.uid;

//   const user = getUser(token)

//   if (!user) return res.redirect("/Login")
//   req.user = user;
//   next();
// }

// async function checkAuth(req, res, next) {

//   //Using Stateless Approach
//   // const userId=req.cookies.uid;
//   // const user=getUser(userId)

//   //JWT Approach
//   const userId = req.headers['authorization']
//   if (userId) {
//     const token = userId.split("Bearer ")[1];
//     const user = getUser(token)
//     req.user = user;
//   }
//   next();
// }

module.exports = {
  // restrictLogedInUserOnly,
  // checkAuth,
  CheckForAuthentication,
  restrictTo
}