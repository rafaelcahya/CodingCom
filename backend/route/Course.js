const express = require('express')
const { type } = require('os')
const router = express.Router()

const db = require('../config/db')

router.post("/addCourse", (req, res) => {
    const name = req.body.name
    const judul = req.body.judul
    const content = req.body.content
    const createAt = req.body.createAt
    let user_id = 0
    let status = "Pending"

    db.query("SELECT * From user WHERE name = ?", name, (err, results) => {
        if (err) {
            console.log(err)
        }

        if (results.length > 0) {
            user_id = results[0].id
            db.query("INSERT INTO course (judul, content, user_Id, status, createAt) VALUES (?, ?, ?, ?, ?);", [judul, content, user_id, status, createAt], (err, results) => {
                console.log(err)
                res.send(results)
            })
            console.log(user_id)
        }
    })
    
    
})

router.get("/listCourse", (req, res) => {
    db.query("SELECT course.id, course.judul, course.content, course.status, course.createAt, user.fullname, user.email FROM course,user WHERE course.user_id = user.id", (err, results) => {
        res.send(results)
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