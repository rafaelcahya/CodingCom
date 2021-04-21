const express = require("express");
const bodyParser = require("body-parser")
const app = express();
const cors = require("cors")

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))

const userRoute = require('./route/User')
app.use("/user", userRoute)

const commentRoute = require('./route/Comment')
app.use("/comment", commentRoute)

app.listen(3001, (req, res) => {
    console.log("Server running...")
});

