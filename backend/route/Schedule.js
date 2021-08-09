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
    const batch = req.body.batch
    const createAt = req.body.createAt
    let updateAt = ""
    let isDeleted = "NO"

    if(title.length<=0 && date.length<=0 && time.length<=0 && des.length<=0 && location.length<=0 && status.length<=0){
        res.send({message: "All form must be filled"})
    }else if (title.length <= 0) {
        res.send({ message: "You must fill this title" })
    } else if (des.length <= 0) {
        res.send({ message: "You must fill this description" })
    } else if (date.length <= 0) {
        res.send({ message: "You must fill this date" })
    } else if (time.length <= 0) {
        res.send({ message: "You must fill this time" })
    } else if (location.length <= 0) {
        res.send({ message: "You must fill this location" })
    } else if (status.length <= 0) {
        res.send({ message: "You must choose this status" })
    } else if (batch.length<=0){
        res.send({message:"You must choose batch"})
    }else {
        db.query("INSERT INTO schedule (title, description, date, time, location, status, batch_id, scheduleCreateAt, scheduleUpdateAt, isDeleted) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?);", [title, des, date, time, location, status, batch, createAt, updateAt, isDeleted], (err, results) => {
            console.log(err)
            res.send({message: "Schedule have been successfully submited"})
        })
    }

})

router.get("/ScheduleList/:name", (req, res) => {
    const name = req.params.name
    let isDeleted = "NO"
    var user_id = 0
    var batch = 0
    db.query("SELECT * from user WHERE name = ? AND isDeleted = ?", [name, isDeleted], (err, results) => {
        if (err) {
            console.log(err)
        }
        if (results.length > 0) {
          user_id = results[0].id
          db.query("SELECT * from bootcampuser WHERE user_id = ? AND isDeleted = ?", [user_id, isDeleted], (err, results) => {
            if (err) {
                console.log(err)
            }
            if (results.length > 0) {
              batch = results[0].batch
              db.query("SELECT * from schedule WHERE isDeleted = ? AND batch_id = ? ORDER BY date", [isDeleted, batch], (err, results) => {
                res.send(results)
                console.log(results)
            })
            }
        })
        }
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