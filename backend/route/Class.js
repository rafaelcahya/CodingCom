const { constants } = require('buffer')
const { Router } = require('express')
const express = require('express')
const { type } = require('os')
const router = express.Router()
const db = require('../config/db')

router.post("/createClass", (req, res) => {
    const name = req.body.name
    const className = req.body.className
    const info = req.body.info
    const des = req.body.des
    const endDate = req.body.enddate
    const endTime = req.body.endtime
    const date = req.body.date
    const time = req.body.time
    const url = req.body.url
    const createAt = req.body.createAt
    let status = "Pending"
    let user_id = 0;
    let updateAt = ""

    if (className.length <= 0) {
        res.send({ message: "Class name can not be empty" })
    } else if (date.length <= 0) {
        res.send({ message: "Date can not be empty" })
    } else if (time.length <= 0) {
        res.send({ message: "Time can not be empty" })
    } else {
        console.log(name)
        db.query("SELECT * From user WHERE name = ?", name, (err, results) => {
            if (err) {
                console.log(err)
            }

            if (results.length > 0) {
                user_id = results[0].id
                if (!req.files) {
                    res.send({ message: "Image can not be empty" })
                } else {
                    const file = req.files.fileUpload
                    const filename = file.name
                    db.query("INSERT INTO class (className, image, classInfo, startDate, endDate, startTime, endTime, classDescription, classUrl, status, user_id, classCreateAt, classUpdateAt) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);", [className, filename, info, date, endDate, time, endTime, des, url, status, user_id, createAt, updateAt], (err, results) => {
                        console.log(err)
                        res.send(results)
                        file.mv('../frontend/src/asset/upload/' + file.name)
                    })
                }
            }
        })
    }
})

router.get("/classList", (req, res) => {
    db.query("SELECT class.id, class.className, class.date, class.time, class.url, class.status, class.classCreateAt, class.classUpdateAt, user.fullname, user.email from class,user WHERE class.user_id=user.Id",(err, results) => {
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
            
            db.query("UPDATE class SET className = ?, date = ?, time = ?, url = ?, status =?, classUpdateAt=?  WHERE id=?;", [className, date, time, url, status, updateAt, id], (err, results) => {
                console.log(err)
                res.send(results)
            })
        }
    })
    }
})

router.get("/classListUser", (req, res) => {
    let status = "Approve"
    db.query("SELECT class.id, class.image, class.className, class.date, class.time, class.url, class.status, class.classCreateAt, class.classUpdateAt, user.fullname, user.email from class,user WHERE class.user_id=user.Id AND class.status = ?",status,(err, results) => {
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