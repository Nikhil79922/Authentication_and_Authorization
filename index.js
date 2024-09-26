const path=require("path")
const express=require("express");
const cookieParser = require("cookie-parser");
const app=express();
const port=8000;
//Import MongoDB connect 
const connectionDB=require("./config/connectionDB")
//Import Routes
const userRoutes=require("./routes/url")
const staticRoutes=require("./routes/staticRoute")
const Valid=require("./routes/user")

//Custom Middleware
const {CheckForAuthentication}=require("./middlewares/auth");

//Middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use(cookieParser())
app.use(CheckForAuthentication)

//ejs
app.set("view engine","ejs")
app.set("views",path.resolve("./views"))

//MongoDb Connection
connectionDB("mongodb://localhost:27017/Shortener")

//Routing
app.use("/url",userRoutes)
app.use("/user",Valid)
app.use("/",staticRoutes)
app.listen(port,()=>{
    console.log("Server is running on the port 8000")
})
