const { constants } = require('buffer')
const { Router } = require('express')
const express = require('express')
const { type } = require('os')
const router = express.Router()
const db = require('../config/db')

router.post("/createClass", (req, res) => {
    const name = req.body.name
    const className = req.body.className
    const date = req.body.date
    const time = req.body.time
    const url = req.body.url
    const createAt = req.body.createAt
    let status = "Pending"
    let mentor_id = 0;
    let updateAt = " "

    if (className.length <= 0) {
        res.send({ message: "Class name can not be empty" })
    } else if (date.length <= 0) {
        res.send({ message: "Date can not be empty" })
    } else if (time.length <= 0) {
        res.send({ message: "Time can not be empty" })
    } else {
        console.log(name)
        db.query("SELECT * From mentor WHERE username = ?", name, (err, results) => {
            if (err) {
                console.log(err)
            }

            if (results.length > 0) {
                mentor_id = results[0].mentorId
                db.query("INSERT INTO class (className, date, time, url, status, mentor_id, createAt, updateAt) VALUES (?, ?, ?, ?, ?, ?, ?, ?);", [className, date, time, url, status, mentor_id, createAt, updateAt], (err, results) => {
                    console.log(err)
                    res.send(results)
                })
                console.log(mentor_id)
            }
        })
    }
})

router.get("/classList", (req, res) => {
    db.query("SELECT class.id, class.className, class.date, class.time, class.url, class.status, class.createAt, class.updateAt, mentor.fullname, mentor.email from class,mentor WHERE class.mentor_id=mentor.mentorId",(err, results) => {
        res.send(results)
        console.log(results)
    })
})

router.post("/updateClass", (req, res) => {
    const id = req.body.id
    let className = req.body.className
    let date = req.body.date
    let time = req.body.time
    let url = req.body.url
    let status = req.body.status
    let updateAt = req.body.updateAt

    if(status.length<=0){
        res.send({message: "You must choose status"})
    }else{
    db.query("SELECT * From class WHERE id = ?", id, (err, results) => {
        if (err) {
            console.log(err)
        }
        if (results.length > 0) {
            if (className.length <= 0) {
                className = results[0].className
                
            }if (date.length <= 0) {
                date = results[0].date
                
            }if (time.length <= 0) {
                time = results[0].time
                
            }if(url.length <= 0 ){
                url = results[0].url
            }
            
            db.query("UPDATE class SET className = ?, date = ?, time = ?, url = ?, status =?, updateAt=?  WHERE id=?;", [className, date, time, url, status, updateAt, id], (err, results) => {
                console.log(err)
                res.send(results)
            })
        }
    })
    }
})

router.get("/classListUser", (req, res) => {
    let status = "Approve"
    db.query("SELECT class.id, class.className, class.date, class.time, class.url, class.status, class.createAt, class.updateAt, mentor.fullname, mentor.email from class,mentor WHERE class.mentor_id=mentor.mentorId AND class.status = ?",status,(err, results) => {
        res.send(results)
        console.log(results)
    })
})

router.get("/classById/:id", (req, res) => {
    const id = req.params.id
    db.query("SELECT * from class WHERE id = ?",id,(err, results) => {
        res.send(results)
        console.log(results)
    })
})

module.exports = router;