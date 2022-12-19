const mongoose = require("mongoose")


const user = mongoose.Schema({
    name:{
        type:String
    }
})

module.exports = mongoose.model("user",user)