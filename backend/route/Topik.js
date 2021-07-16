const { constants } = require('buffer')
const { Router } = require('express')
const express = require('express')
const { type } = require('os')
const router = express.Router()

const db = require('../config/db')

router.post("/addTopik", (req, res) => {
    const name = req.body.name
    const title = req.body.title
    const category = req.body.category
    const info = req.body.info
    const about = req.body.about
    const createAt = req.body.createAt
    const time = req.body.time
    const progress = req.body.progress
    let updateAt = ""
    let isDeleted = "NO"
    let status = "Pending"
    let user_id = 0
    if(title.length<=0 && info.length<=0 && progress.length<=0 && about.length<=0 && time.length<=0 && category.length<=0){
        res.send({message: "All data is not filled"})
    } else if(category.length<=0){
        res.send({message:"Tutorial is not selected"})
    } else if (title.length <= 0) {
        res.send({ message: "Sub tutorial title is not filled in" })
    } else if (info.length <= 0) {
        res.send({ message: "Sub tutorial info is not filled in" })
    } else if(progress.length<=0){
        res.send({message: "Progress not selected"})
    } else if (about.length <= 0) {
        res.send({ message: "Sub tutorial description is not filled in" })
    } else if(progress.length <= 0 && time <= 0){
        res.send({message: "Time is not filled in"})
    }else {
        db.query("SELECT * From user WHERE name = ?", name, (err, results) => {
            if (err) {
                console.log(err)
            }

            if (results.length > 0) {
                user_id = results[0].id
                db.query("INSERT INTO topik (topikTitle, category_id, topikInfo, about, status, time, progress, topikCreateAt, topikUpdateAt, isDeleted, user_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);", [title, category, info, about, status, time, progress, createAt, updateAt, isDeleted, user_id], (err, results) => {
                    console.log(err)
                    res.send({message:"Data has been added successfully"})
                })
            }
        })
    }
})

router.get("/topikById/:id", (req, res) => {
    const id = req.params.id
    db.query("SELECT topik.topikId, topik.category_id, topik.progress, topik.time, topik.status, topik.topikTitle, topik.topikInfo, topik.about, topik.topikCreateAt, topik.topikUpdateAt, user.fullname from topik,user WHERE topik.user_id = user.id AND topikId = ?", id, (err, results) => {
        res.send(results)
        console.log(results)
    })
    console.log(id)
})

router.get("/TopikList", (req, res) => {
    let isDeleted = "NO"
    db.query("SELECT topik.topikId, topik.topikTitle, topik.topikInfo, topik.about, topik.status, topik.time, topik.progress, topik.topikCreateAt, topik.topikUpdateAt, user.fullname, category.category from topik,user,category WHERE topik.user_id = user.id AND topik.category_id = category.categoryId AND topik.isDeleted = ?",isDeleted, (err, results) => {
        res.send(results)
        console.log(results)
    })
})

router.get("/ListTopik", (req, res) => {
    let status = "Approve"
    let isDeleted = "NO"
    db.query("SELECT * from topik WHERE status = ? AND isDeleted = ?", [status,isDeleted], (err, results) => {
        res.send(results)
        console.log(results)
    })
})

router.post("/editTopik", (req, res) => {
    const id = req.body.id
    let title = req.body.title
    let info = req.body.info
    let about = req.body.about
    const updateAt = req.body.updateAt
    const status = req.body.status

    if (status.length <= 0) {
        res.send({ message: "You must Choose Status" })
    } else {
        db.query("SELECT * From topik WHERE topikId = ?", id, (err, results) => {
            if (err) {
                console.log(err)
            }

            if (results.length > 0) {
                if (title.length <= 0) {
                    title = results[0].topikTitle
                } if (info.length <= 0) {
                    info = results[0].topikInfo
                } if (about.length <= 0) {
                    about = results[0].about
                }
                db.query("UPDATE topik SET topikTitle = ?, topikInfo = ?, about = ?, status = ?, topikUpdateAt =? WHERE topikId=?;", [title, info, about, status, updateAt, id], (err, results) => {
                    console.log(err)
                    res.send(results)
                })
            }
        })
    }
})

router.post("/editTopikMentor", (req, res) => {
    const id = req.body.id
    let title = req.body.title
    let info = req.body.info
    let about = req.body.about
    const updateAt = req.body.updateAt
    let category = req.body.category


    db.query("SELECT * From topik WHERE topikId = ?", id, (err, results) => {
        if (err) {
            console.log(err)
        }

        if (results.length > 0) {
            if (title.length <= 0) {
                title = results[0].topikTitle
            } if (info.length <= 0) {
                info = results[0].topikInfo
            } if (about.length <= 0) {
                about = results[0].about
            } if (category.length <= 0) {
                category = results[0].category_id
            }
            db.query("UPDATE topik SET topikTitle = ?, topikInfo = ?, about = ?, category_id = ?, topikUpdateAt =? WHERE topikId=?;", [title, info, about, category, updateAt, id], (err, results) => {
                console.log(err)
                res.send(results)
            })
        }
    })
})

router.get("/topikByCatId/:id/:hash", (req, res) => {
    const id = req.params.id
    let status = "Approve"
    let isDeleted = "NO"
    db.query("SELECT * from topik WHERE category_id = ? AND isDeleted = ? AND status = ?", [id, isDeleted, status], (err, results) => {
        res.send(results)
    })
})

router.get("/TopikListMentor/:name", (req, res) => {
    const name = req.params.name
    let isDeleted = "NO"
    let user_id = 0
    db.query("SELECT * From user WHERE name = ?", name, (err, results) => {
        if (err) {
            console.log(err)
        }

        if (results.length > 0) {
            user_id = results[0].id
            db.query("SELECT topik.topikId, topik.topikTitle, topik.topikInfo, topik.about, topik.status, topik.topikCreateAt, topik.topikUpdateAt, user.fullname, category.category from topik,user,category WHERE topik.user_id = user.id AND topik.category_id = category.categoryId AND topik.user_id = ? AND topik.isDeleted = ?",[user_id,isDeleted],(err, results) => {
                res.send(results)
                console.log(results)
            })
        }
    })
})

router.put("/deleteTopik", (req, res) => {
    const id = req.body.id
    const updateAt = req.body.updateAt
    let isDeleted = "YES"

    db.query("UPDATE topik SET isDeleted = ?, topikUpdateAt = ? WHERE topikId = ?;", [isDeleted, updateAt, id], (err, results) => {
        console.log(err)
        res.send(results)
    })
})

router.get("/TopikListCourseCount", (req, res) => {
    let isDeleted = "NO"
    let topik_id = 0 
    db.query("SELECT * from topik WHERE isDeleted = ?",isDeleted,(err,results)=>{
        if(err){
            console.log(err)
        }
        if(results.length>0){
            topik_id =results[0].id
            db.query("SELECT COUNT(id) as courseCount from course WHERE topik_id = ? AND isDeleted = ?",[topik_id, isDeleted], (err, results) => {
                res.send(results)
                console.log(results)
            })
        }
    })
})

module.exports = router;