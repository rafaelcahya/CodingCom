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

router.get("/classList", (req, res) => {
    db.query("SELECT * FROM class", (err, results) => {
        res.send(results)
    })
})

router.post("/updateClass", (req, res) => {
    const id = req.body.id
    let mentorName = req.body.mentorName
    let email = req.body.email
    let className = req.body.className
    let month = req.body.month
    let date = req.body.date
    let time = req.body.time
    let url = req.body.url
    let status = req.body.status
    let createAt = req.body.createAt

    if(status.length<=0){
        res.send({message: "You must choose status"})
    }else{
    db.query("SELECT * From class WHERE id = ?", id, (err, results) => {
        if (err) {
            console.log(err)
        }
        if (results.length > 0) {
            if (mentorName.length <= 0) {
                mentorName = results[0].mentorName
                
            }if (email.length <= 0) {
                email = results[0].email
                
            }if (className.length <= 0) {
                className = results[0].className
                
            }if (month.length <= 0) {
                month = results[0].month
                
            }if (date.length <= 0) {
                date = results[0].date
                
            }if (time.length <= 0) {
                time = results[0].time
                
            }
            
            db.query("UPDATE class SET mentorName = ?, email = ?, className = ?, month = ?, date = ?, time = ?, url = ?, status =?, createAt=?  WHERE id=?;", [mentorName, email, className, month, date, time, url, status, createAt, id], (err, results) => {
                console.log(err)
                res.send(results)
            })
        }
    })
    }
})

module.exports = router;