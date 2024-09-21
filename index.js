const express=require("express");
const app=express();
const port=8000;
//Import MongoDB connect 
const connectionDB=require("./config/connectionDB")
//Import Routes
const userRoutes=require("./routes/url")

//Middleware
app.use(express.json());


//MongoDb Connection
connectionDB("mongodb://localhost:27017/Shortener")

//Routing
app.use("/url",userRoutes)
app.listen(port,()=>{
    console.log("Server is running on the port 8000")
})