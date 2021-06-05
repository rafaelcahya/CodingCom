const { constants } = require('buffer')
const { Router } = require('express')
const express = require('express')
const { type } = require('os')
const router = express.Router()

const db = require('../config/db')

router.post("/addSchedule", (req, res) => {
    const title = req.body.title
    const date = req.body.date
    const time = req.body.time
    const des = req.body.des
    const location = req.body.location
    const status = req.body.status
    const createAt = req.body.createAt
    let updateAt = ""
    let isDeleted = "NO"

    if (title.length <= 0) {
        res.send({ message: "You must fill this title" })
    } else if (date.length <= 0) {
        res.send({ message: "You must fill this date" })
    } else if (time.length <= 0) {
        res.send({ message: "You must fill this time" })
    } else if(des.length <= 0){
        res.send({ message: "You must fill this description" })
    } else if(location.length <= 0){
        res.send({ message: "You must fill this location" })
    } else if(status.length <= 0){
        res.send({ message: "You must choose this status" })
    } else {
        db.query("INSERT INTO schedule (title, description, date, time, location, status , scheduleCreateAt, scheduleUpdateAt, isDeleted) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?);", [title, des , date, time, location , status, createAt, updateAt, isDeleted], (err, results) => {
            console.log(err)
            res.send(results)
        })
    }

})

module.exports = router;