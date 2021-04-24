const { constants } = require('buffer')
const { Router } = require('express')
const express = require('express')
const { type } = require('os')
const router = express.Router()

const db = require('../config/db')

router.post("/createClass", (req, res) => {
    const mentorName = req.body.mentorName
    const email = req.body.email
    const className = req.body.className
    const month = req.body.month
    const date = req.body.date
    const time = req.body.time
    const url = req.body.url
    const createAt = req.body.createAt
    let status = "Pending"

    if (mentorName.length <= 0) {
        res.send({ message: "Mentor name can not be empty" })
    } else if (email.length <= 0) {
        res.send({ message: "Email can not be empty" })
    } else if (email.match(/[@]/) == null) {
        res.send({ message: "Email is invalid" })
    } else if (email.match(/[.]/) == null) {
        res.send({ message: "Email is invalid" })
    } else if (className.length <= 0) {
        res.send({ message: "Class name can not be empty" })
    } else if (month.length <= 0) {
        res.send({ message: "Month can not be empty" })
    } else if (date.length <= 0) {
        res.send({ message: "Date can not be empty" })
    } else if (time.length <= 0) {
        res.send({ message: "Time can not be empty" })
    } else {
        db.query("INSERT INTO class (mentorName, email, className, month, date, time, url, status, createAt) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?);", [mentorName, email, className, month, date, time, url, status, createAt], (err, results) => {
            console.log(err)
            res.send(results)
        })
    }
})

module.exports = router;