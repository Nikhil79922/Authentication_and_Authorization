const mongoose = require("mongoose")

const Schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required:true,
        default:"USER",
    }
}, { timestamps: true })

const User = mongoose.model("users", Schema);
module.exports = User;