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
    let isDeleted = "NO"

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
                    db.query("INSERT INTO class (className, image, classInfo, startDate, endDate, startTime, endTime, classDescription, classUrl, status, user_id, classCreateAt, classUpdateAt, isDeleted) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);", [className, filename, info, date, endDate, time, endTime, des, url, status, user_id, createAt, updateAt, isDeleted], (err, results) => {
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
    let isDeleted = "NO"
    db.query("SELECT class.id, class.className, class.classInfo, class.startDate, class.endDate, class.startTime, class.endTime, class.classDescription, class.classUrl, class.status, class.classCreateAt, class.classUpdateAt, user.fullname, user.email from class,user WHERE class.user_id=user.Id AND class.isDeleted = ?", isDeleted, (err, results) => {
        res.send(results)
    })
})

router.get("/classListByMentor/:name", (req, res) => {
    const name = req.params.name
    let isDeleted = "NO"
    let user_id = 0
    db.query("SELECT * From user WHERE name = ?", name, (err, results) => {
        if (err) {
            console.log(err)
        }

        if (results.length > 0) {
            // buat ambil index
            user_id = results[0].id
            db.query("SELECT class.id, class.className, class.classInfo, class.startDate, class.endDate, class.startTime, class.endTime, class.classDescription, class.classUrl, class.status, class.classCreateAt, class.classUpdateAt, user.fullname, user.email from class,user WHERE class.user_id=user.Id AND class.isDeleted = ? AND class.user_id = ?", [isDeleted, user_id], (err, results) => {
                res.send(results)
            })
        }
    })
})

router.post("/updateClass", (req, res) => {
    const id = req.body.id
    let className = req.body.className
    let info = req.body.info
    let startdate = req.body.startdate
    let enddate = req.body.enddate
    let starttime = req.body.starttime
    let endtime = req.body.endtime
    let des = req.body.des
    let url = req.body.url
    let status = req.body.status
    let updateAt = req.body.updateAt

    if (status.length <= 0) {
        res.send({ message: "You must choose status" })
    } else {
        db.query("SELECT * From class WHERE id = ?", id, (err, results) => {
            if (err) {
                console.log(err)
            }
            if (results.length > 0) {
                if (className.length <= 0) {
                    className = results[0].className

                } if (startdate.length <= 0) {
                    startdate = results[0].startDate

                } if (enddate.length <= 0) {
                    enddate = results[0].endDate

                } if (starttime.length <= 0) {
                    starttime = results[0].startTime

                } if (endtime.length <= 0) {
                    endtime = results[0].endTime

                } if (info.length <= 0) {
                    info = results[0].classInfo
                } if (des.length <= 0) {
                    des = results[0].classDescription
                } if (url.length <= 0) {
                    url = results[0].classUrl
                }
                db.query("UPDATE class SET className = ?, classInfo = ?, startDate = ?, endDate=?, startTime = ?, endTime = ?, classDescription = ?, classUrl = ?, status =?, classUpdateAt=?  WHERE id=?;", [className, info, startdate, enddate, starttime, endtime, des, url, status, updateAt, id], (err, results) => {
                    console.log(err)
                    res.send(results)
                })

            }
        })
    }
})

router.get("/classListUser", (req, res) => {
    let isDeleted = "NO"
    let status = "Approve"
    db.query("SELECT class.id, class.image, class.className, class.classInfo, class.startDate, class.endDate, class.startTime, class.endTime, class.classUrl, class.status, class.classCreateAt, class.classUpdateAt, user.fullname, user.email from class,user WHERE class.user_id=user.Id AND class.status = ? AND class.isDeleted = ?", [status, isDeleted], (err, results) => {
        res.send(results)
    })
})

router.get("/classById/:id", (req, res) => {
    const id = req.params.id
    db.query("SELECT class.id, class.image, class.className, class.classInfo, class.startDate, class.endDate, class.startTime, class.endTime, class.classDescription, class.classUrl, class.status, class.classCreateAt, class.classUpdateAt, user.fullname, user.email from class,user WHERE class.user_id=user.Id AND class.id = ?", id, (err, results) => {
        res.send(results)
    })
})

router.put("/deleteClass", (req, res) => {
    const id = req.body.id
    const updateAt = req.body.updateAt
    let isDeleted = "YES"

    db.query("UPDATE class SET isDeleted = ?, classUpdateAt = ? WHERE id = ?;", [isDeleted, updateAt, id], (err, results) => {
        console.log(err)
        res.send(results)
    })
})

router.post("/updateClassMentor", (req, res) => {
    const id = req.body.id
    let className = req.body.className
    let info = req.body.info
    let startdate = req.body.startdate
    let enddate = req.body.enddate
    let starttime = req.body.starttime
    let endtime = req.body.endtime
    let des = req.body.des
    let url = req.body.url
    const updateAt = req.body.updateAt
    let status = "Pending"
    db.query("SELECT * From class WHERE id = ?", id, (err, results) => {
        if (err) {
            console.log(err)
        }
        if (results.length > 0) {
            if (className.length <= 0) {
                className = results[0].className

            } if (startdate.length <= 0) {
                startdate = results[0].startDate

            } if (enddate.length <= 0) {
                enddate = results[0].endDate

            } if (starttime.length <= 0) {
                starttime = results[0].startTime

            } if (endtime.length <= 0) {
                endtime = results[0].endTime

            } if (info.length <= 0) {
                info = results[0].classInfo
            } if (des.length <= 0) {
                des = results[0].classDescription
            } if (url.length <= 0) {
                url = results[0].classUrl
            }
            db.query("UPDATE class SET className = ?, classInfo = ?, startDate = ?, endDate=?, startTime = ?, endTime = ?, classDescription = ?, classUrl = ?, status =?, classUpdateAt=?  WHERE id=?;", [className, info, startdate, enddate, starttime, endtime, des, url, status, updateAt, id], (err, results) => {
                console.log(err)
                res.send(results)
            })

        }
    })
})

module.exports = router;