const mongoose=require("mongoose")

async function connectionDB(ConnectionString){
mongoose.connect(ConnectionString)
}

module.exports=connectionDB;  