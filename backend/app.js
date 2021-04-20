const express = require("express");
const app = express();
const cors = require("cors")

app.use(cors())
app.use(express.json())

const userRoute = require('./route/User')
app.use("/user", userRoute)

const commentRoute = require('./route/comment')
app.use("/comment", commentRoute)

app.listen(3001, (req, res) => {
    console.log("Server running...")
});

