const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const res = require("express/lib/response")
const routes = require("./Routes/Server")
const app = express()
const PORT = process.env.PORT || 4000
const url = "mongodb+srv://snonline:snonline@cluster0.dk9iaum.mongodb.net/prcart"



app.use(express.json())
app.use(cors())

app.use(express.static("./Public/"))

mongoose.connect(url, () => {
    console.log("db connected")
})
app.listen(PORT, () => {
    console.log("server started at 4000");
})

app.use('/', routes)