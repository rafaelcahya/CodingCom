const express = require('express')
const { type } = require('os')
const router = express.Router()

const db = require('../config/db')

router.post("/addCourse", (req, res) => {
    const name = req.body.name
    const judul = req.body.judul
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
            db.query("INSERT INTO course (judul, description, time, content, user_Id, status, createAt, updateAt, isDeleted) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?);", [judul, des, time, content, user_id, status, createAt, updateAt, isDeleted], (err, results) => {
                console.log(err)
                res.send(results)
            })
            console.log(user_id)
        }
    })
})

router.get("/listCourse", (req, res) => {
    db.query("SELECT course.id, course.judul, course.description, course.time, course.content, course.status, course.createAt, course.updateAt, user.fullname, user.email FROM course,user WHERE course.user_id = user.id", (err, results) => {
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
            db.query("SELECT course.id, course.judul, course.description, course.time, course.content, course.status, course.createAt, course.updateAt, user.fullname, user.email FROM course,user WHERE course.user_id = user.id AND course.user_id = ?",user_id, (err, results) => {
                res.send(results)
            })
            console.log(user_id)
        }
    })
})

router.get("/courseById/:id", (req, res) => {
    const id = req.params.id
    db.query("SELECT * from course WHERE id = ?",id,(err, results) => {
        res.send(results)
        console.log(results)
    })
})

module.exports = router;