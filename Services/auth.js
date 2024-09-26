// const sessionIdToUseMap = new Map();
const jwt =require("jsonwebtoken")
const Secret="Nikhil@123$"

function setUser(user) {
    // sessionIdToUseMap.set(id, user);
    return jwt.sign({
      _id:user._id,
      email:user.email,
      role:user.role
    },Secret,{expiresIn:"10s"})

}
function getUser(token) {
  // return  sessionIdToUseMap.get(id);
  try {
    return jwt.verify(token, Secret); // This will throw an error if the token has expired
  } catch (err) {
    if (err.name === "TokenExpiredError") {
      return null; // Return null if token has expired
    }
    throw err; // Throw any other errors
  }
}
module.exports = {
    setUser,
    getUser,
}