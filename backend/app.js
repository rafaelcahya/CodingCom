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

const classRoute = require('./route/Class')
app.use("/class", classRoute)

const submitRoute = require('./route/Submit')
app.use("/submit", submitRoute)

const subscribeRoute = require('./route/Subscribe')
app.use("/subscribe", subscribeRoute)

const bootcampUserRoute = require('./route/BootcampUser')
app.use("/bootcampuser", bootcampUserRoute)

const feedbackRoute = require('./route/Feedback')
app.use("/feedback", feedbackRoute)

const mentorRoute = require('./route/Mentor')
app.use("/mentor", mentorRoute)

app.listen(3001, (req, res) => {
    console.log("Server running...")
});

