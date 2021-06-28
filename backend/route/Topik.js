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
    let updateAt = ""
    let isDeleted = "NO"
    let status = "Pending"
    let user_id = 0

    if (title.length <= 0) {
        res.send({ message: "Topik Title can not be empty" })
    } else if (info.length <= 0) {
        res.send({ message: "Topik Info can not be empty" })
    } else if (about.length <= 0) {
        res.send({ message: "Topik About can not be empty" })
    } else {
        db.query("SELECT * From user WHERE name = ?", name, (err, results) => {
            if (err) {
                console.log(err)
            }

            if (results.length > 0) {
                user_id = results[0].id
                db.query("INSERT INTO topik (topikTitle, category_id, topikInfo, about, status, topikCreateAt, topikUpdateAt, isDeleted, user_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?);", [title, category, info, about, status, createAt, updateAt, isDeleted, user_id], (err, results) => {
                    console.log(err)
                    res.send(results)
                })
                console.log(user_id)
            }
        })
    }
})

router.get("/topikById/:id", (req, res) => {
    const id = req.params.id
    db.query("SELECT * from topik WHERE topikId = ?", id, (err, results) => {
        res.send(results)
    })
    console.log(id)
})

router.get("/TopikList", (req, res) => {
    db.query("SELECT topik.topikId, topik.topikTitle, topik.topikInfo, topik.about, topik.status, topik.topikCreateAt, topik.topikUpdateAt, user.fullname, category.category from topik,user,category WHERE topik.user_id = user.id AND topik.category_id = category.categoryId", (err, results) => {
        res.send(results)
        console.log(results)
    })
})

router.get("/ListTopik", (req, res) => {
    let status = "Approve"
    db.query("SELECT * from topik WHERE status = ?", status, (err, results) => {
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

router.get("/topikByCatId/:id", (req, res) => {
    const id = req.params.id
    db.query("SELECT * from topik WHERE category_id = ?", id, (err, results) => {
        res.send(results)
    })
})

module.exports = router;