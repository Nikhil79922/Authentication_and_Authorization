const jwt=require("jsonwebtoken")
const Secret="Nikhil@123$"

function setUser(user) {
 return jwt.sign({
      _id:user._id,
      email:user.email
    },Secret)
}
function getUser(token) {
 try {
   return jwt.verify(token,Secret)
 } catch (error) {
  return null
 }
}
module.exports = {
    setUser,
    getUser,
}
