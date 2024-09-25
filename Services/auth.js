// const sessionIdToUseMap = new Map();
const jwt =require("jsonwebtoken")
const Secret="Nikhil@123$"

function setUser(user) {
    // sessionIdToUseMap.set(id, user);
    return jwt.sign({
      _id:user._id,
      email:user.email,
      role:user.role
    },Secret)

}
function getUser(token) {
  // return  sessionIdToUseMap.get(id);
  return jwt.verify(token,Secret)
}
module.exports = {
    setUser,
    getUser,
}
