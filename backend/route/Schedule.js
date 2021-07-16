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

    if(title.length<=0 && date.length<=0 && time.length<=0 && des.length<=0 && location.length<=0 && status.length<=0){
        res.send({message: "All form must be filled"})
    }else if (title.length <= 0) {
        res.send({ message: "You must fill this title" })
    } else if (date.length <= 0) {
        res.send({ message: "You must fill this date" })
    } else if (time.length <= 0) {
        res.send({ message: "You must fill this time" })
    } else if (des.length <= 0) {
        res.send({ message: "You must fill this description" })
    } else if (location.length <= 0) {
        res.send({ message: "You must fill this location" })
    } else if (status.length <= 0) {
        res.send({ message: "You must choose this status" })
    } else {
        db.query("INSERT INTO schedule (title, description, date, time, location, status , scheduleCreateAt, scheduleUpdateAt, isDeleted) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?);", [title, des, date, time, location, status, createAt, updateAt, isDeleted], (err, results) => {
            console.log(err)
            res.send({message: "Schedule have been successfully submited"})
        })
    }

})

router.get("/ScheduleList", (req, res) => {
    let isDeleted = "NO"
    db.query("SELECT * from schedule WHERE isDeleted = ? ORDER BY date", isDeleted, (err, results) => {
        res.send(results)
        console.log(results)
    })
})

router.get("/ScheduleById/:id", (req, res) => {
    const id = req.params.id
    let isDeleted = "NO"
    db.query("SELECT * from schedule WHERE scheduleId = ? AND isDeleted = ?", [id, isDeleted], (err, results) => {
        res.send(results)
        console.log(results)
    })
})

router.put("/deleteSchedule", (req, res) => {
    const id = req.body.id
    const updateAt = req.body.updateAt
    let isDeleted = "YES"

    db.query("UPDATE schedule SET isDeleted = ?, scheduleUpdateAt = ? WHERE scheduleId = ?;", [isDeleted, updateAt, id], (err, results) => {
        console.log(err)
        res.send(results)
    })
})

router.post("/updateSchedule", (req, res) => {
    const id = req.body.id
    let title = req.body.title
    let des = req.body.des
    let date = req.body.date
    let time = req.body.time
    let location = req.body.location
    let status = req.body.status
    let updateAt = req.body.updateAt

    db.query("SELECT * From schedule WHERE scheduleId = ?", id, (err, results) => {
        if (err) {
            console.log(err)
        }
        if (results.length > 0) {
            if (title.length <= 0) {
                title = results[0].title

            } if (des.length <= 0) {
                des = results[0].description

            } if (date.length <= 0) {
                date = results[0].date

            } if (time.length <= 0) {
                time = results[0].time

            } if (location.length <= 0) {
                location = results[0].location

            } if (status.length <= 0) {
                status = results[0].status
            }
            db.query("UPDATE schedule SET title = ?, description = ?, date = ?, time = ?, location = ?, status = ?, scheduleUpdateAt = ?  WHERE scheduleId=?;", [ title, des, date, time, location, status, updateAt, id], (err, results) => {
                console.log(err)
                res.send({message: "Schedule Updated"})
            })

        }
    })
})

module.exports = router;