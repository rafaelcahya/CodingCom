const express = require('express')
const { type } = require('os')
const router = express.Router()

const db = require('../config/db')

router.post("/addCourse", (req, res) => {
    const name = req.body.name
    const judul = req.body.judul
    const topik = req.body.topik
    const number = req.body.number
    const des = req.body.des
    const time = req.body.time
    const content = req.body.content
    const createAt = req.body.createAt
    let updateAt = ""
    let user_id = 0
    let status = "Pending"
    let isDeleted = "NO"

    db.query("SELECT * From user WHERE name = ?", name, (err, results) => {
        if (err) {
            console.log(err)
        }

        if (results.length > 0) {
            user_id = results[0].id
            db.query("INSERT INTO course (judul, topik, number, description, time, content, user_Id, status, courseCreateAt, courseUpdateAt, isDeleted) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);", [judul, topik, number, des, time, content, user_id, status, createAt, updateAt, isDeleted], (err, results) => {
                console.log(err)
                res.send(results)
            })
            console.log(user_id)
        }
    })
})

router.put("/updateCourse", (req, res) => {
    const id = req.body.id
    let judul = req.body.judul
    let des = req.body.des
    let time = req.body.time
    let content = req.body.content
    const updateAt = req.body.updateAt
    let status = "Pending"

    db.query("SELECT * From course WHERE id = ?", id, (err, results) => {
        if (err) {
            console.log(err)
        }

        if (results.length > 0) {
            if(judul.length<=0){
                judul = results[0].judul
            }if(des.length<=0){
                des = results[0].description
            }if(time.length<=0){
                time = results[0].time
            }if(content.length<=0){
                content = results[0].content
            }
            db.query("UPDATE course SET judul = ?, description = ?, time = ?, content = ?, status =?, courseUpdateAt=?  WHERE id=?;", [judul, des, time, content, status, updateAt, id], (err, results) => {
                console.log(err)
                res.send(results)
            })
        }
    })

    

})

router.get("/listCourse", (req, res) => {
    db.query("SELECT course.id, course.judul, course.description, course.time, course.content, course.status, course.courseCreateAt, course.courseUpdateAt, user.fullname, user.email FROM course,user WHERE course.user_id = user.id", (err, results) => {
        res.send(results)
    })
})

router.get("/listCourseUser", (req, res) => {
    db.query("SELECT * FROM course ORDER BY number ASC", (err, results) => {
        res.send(results)
    })
})

router.get("/listCourseMentor/:name", (req, res) => {
    const name = req.params.name
    let user_id = 0
    db.query("SELECT * From user WHERE name = ?", name, (err, results) => {
        if (err) {
            console.log(err)
        }

        if (results.length > 0) {
            user_id = results[0].id
            db.query("SELECT course.number, course.id, course.judul, course.description, course.time, course.content, course.status, course.courseCreateAt, course.courseUpdateAt, user.fullname, user.email FROM course,user WHERE course.user_id = user.id AND course.user_id = ?", user_id, (err, results) => {
                res.send(results)
            })
        }
    })
})

router.get("/courseById/:id", (req, res) => {
    const id = req.params.id
    db.query("SELECT * from course WHERE id = ?", id, (err, results) => {
        res.send(results)
    })
})

module.exports = router;