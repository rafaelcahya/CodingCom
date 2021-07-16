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
    
    if(judul.length<=0 && topik.length<=0 && number.length<=0 && des.length<=0 && time.length<=0 && content.length<=0){
        res.send({message:"All form is not filled"})
    }else if(judul.length<=0){
        res.send({message:"Title is not filled in"})
    }else if(topik.length<=0){
        res.send({message:"Tutorial is not selected"})
    }else if(number.length<=0){
        res.send({message:"Tutorial number is not filled in"})
    }else if(des.length<=0){
        res.send({message:"Description is not filled in"})
    }else if(time.length<=0){
        res.send({message:"Estimated time is not filled in"})
    }else if(content.length<=0){
        res.send({message:"Tutorial content is not filled in"})
    }else {
        db.query("SELECT * From user WHERE name = ?", name, (err, results) => {
            if (err) {
                console.log(err)
            }
    
            if (results.length > 0) {
                user_id = results[0].id
                db.query("SELECT * From course WHERE topik_id = ? AND number = ?",[topik, number], (err, results) => {
                    if (err) {
                        console.log(err)
                    }
            
                    if (!results.length) {
                        db.query("INSERT INTO course (judul, topik_id, number, description, time, content, user_Id, status, courseCreateAt, courseUpdateAt, isDeleted) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);", [judul, topik, number, des, time, content, user_id, status, createAt, updateAt, isDeleted], (err, results) => {
                            console.log(err)
                            res.send({message:"Data has been added successfully"})
                        })
                    }else{
                        res.send({message:"Tutorial Number can not be same at the same Topic"})
                    }
                })
            }
        })
    }
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
    let isDeleted = "NO"
    db.query("SELECT course.id, course.number, course.judul, course.description, course.time, course.content, course.topik_id, course.status, course.courseCreateAt, course.courseUpdateAt, user.fullname, topik.topikTitle, user.email FROM course,user,topik WHERE course.user_id = user.id AND course.topik_id = topik.topikId AND course.isDeleted = ?",isDeleted, (err, results) => {
        res.send(results)
    })
})

router.get("/listCourseUser", (req, res) => {
    let isDeleted = "NO"
    db.query("SELECT * FROM course WHERE isDeleted = ? ORDER BY number ASC",isDeleted, (err, results) => {
        res.send(results)
    })
})

router.get("/listCourseMentor/:name", (req, res) => {
    const name = req.params.name
    let user_id = 0
    let isDeleted = "NO"
    db.query("SELECT * From user WHERE name = ?", name, (err, results) => {
        if (err) {
            console.log(err)
        }

        if (results.length > 0) {
            // buat ambil index
            user_id = results[0].id
            db.query("SELECT course.number, course.id, course.judul, course.description, course.time, course.content, course.status, course.courseCreateAt, course.courseUpdateAt, user.fullname, topik.topikTitle, user.email FROM course,user,topik WHERE course.user_id = user.id AND course.topik_id = topik.topikId AND course.user_id = ? AND course.isDeleted = ?", [user_id,isDeleted], (err, results) => {
                res.send(results)
            })
        }
    })
})

router.get("/courseById/:id/:id2", (req, res) => {
    const id = req.params.id
    const topik_id = req.params.id2
    db.query("SELECT * from course WHERE topik_id = ? AND number = ?", [topik_id, id], (err, results) => {
        res.send(results)
    })
})

router.get("/courseByIdMentor/:id", (req, res) => {
    const id = req.params.id
    db.query("SELECT * from course WHERE id = ?",id, (err, results) => {
        res.send(results)
    })
})

router.get("/courseByTopikIdNumber/:id", (req, res) => {
    const id = req.params.id
    let status = "APPROVED"
    let number = "1"
    let isDeleted = "NO"
    db.query("SELECT * from course WHERE topik_id = ? AND status = ? AND number = ? AND isDeleted = ?", [id, status, number, isDeleted], (err, results) => {
        res.send(results)
    })
})

router.get("/courseByTopikId/:id", (req, res) => {
    const id = req.params.id
    let status = "APPROVED"
    let isDeleted = "NO"
    db.query("SELECT * from course WHERE topik_id = ? AND status = ? AND isDeleted = ?", [id, status, isDeleted], (err, results) => {
        res.send(results)
    })
})

router.put("/approve", (req, res) => {
    const id = req.body.id
    const topik_id = req.body.id2
    const updateAt = req.body.updateAt
    let status = "APPROVED"

    db.query("UPDATE course SET status = ?, courseUpdateAt=? WHERE topik_id = ? AND number = ?;", [status, updateAt, topik_id, id], (err, results) => {
        console.log(err)
        res.send(results)
    })
})

router.put("/reject", (req, res) => {
    const id = req.body.id
    const topik_id = req.body.id2
    const updateAt = req.body.updateAt
    let status = "REJECTED"

    db.query("UPDATE course SET status = ?, courseUpdateAt=? WHERE topik_id = ? AND number = ?;", [status, updateAt, topik_id, id], (err, results) => {
        console.log(err)
        res.send(results)
    })
})

router.put("/deleteCourse", (req, res) => {
    const id = req.body.id
    const updateAt = req.body.updateAt
    let isDeleted = "YES"

    db.query("UPDATE course SET isDeleted = ?, courseUpdateAt = ? WHERE id = ?;", [isDeleted, updateAt, id], (err, results) => {
        console.log(err)
        res.send(results)
    })
})

module.exports = router;