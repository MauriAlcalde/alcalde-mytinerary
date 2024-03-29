const express = require("express")
require("dotenv").config()
const cors = require("cors")
const router= require("./routes/index")
require("./config/database")

const app= express()
 

app.use(cors())
app.use(express.json())

app.use("/api",router) 

app.listen(4000, ()=> console.log("App listening on port 4000"))

