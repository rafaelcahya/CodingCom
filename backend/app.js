const express = require("express");
const bodyParser = require("body-parser")
const app = express();
const fileUpload = require('express-fileupload')
const cors = require("cors")

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(fileUpload());

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

const courseRoute = require('./route/Course')
app.use("/course", courseRoute)

const batchRoute = require('./route/Batch')
app.use("/batch", batchRoute)

const jobsRoute = require('./route/Jobs')
app.use("/jobs", jobsRoute)

const ratingRoute = require('./route/Rating')
app.use("/rating", ratingRoute)

const projectRoute = require('./route/Project')
app.use("/project", projectRoute)

const topikRoute = require('./route/Topik')
app.use("/topik", topikRoute)

const scheduleRoute = require('./route/Schedule')
app.use("/schedule", scheduleRoute)

const transactionRoute = require('./route/Transaction')
app.use("/transaction", transactionRoute)

const categoryRoute = require('./route/Category')
app.use("/category", categoryRoute)

app.listen(3001, (req, res) => {
    console.log("Server running...")
});

