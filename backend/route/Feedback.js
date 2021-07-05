const { constants } = require('buffer')
const { Router } = require('express')
const express = require('express')
const { fdatasync } = require('fs')
const { type } = require('os')
const router = express.Router()

const db = require('../config/db')

router.post("/feedback", (req, res) => {
    const name = req.body.name
    const about = req.body.about
    const des = req.body.des
    let namefile = ""
    const createAt = req.body.createAt
    let user_id = 0
    let isDeleted = "NO"

    if (about.length <= 0) {
        res.send({ message: "About not selected" })
    } else if (des.length <= 0) {
        res.send({ message: "Description is not filled in" })
    } else {
        db.query("SELECT * From user WHERE name = ?", name, (err, results) => {
            if (err) {
                console.log(err)
            }
            if (results.length > 0) {
                user_id = results[0].id
                if (!req.files) {
                    res.send({message:"Image must be included"})
                } else {
                    const file = req.files.fileUpload
                    const filename = file.name
                        db.query("INSERT INTO feedback (about, image, description, user_id, feedbackCreateAt, isDeleted) VALUES (?, ?, ?, ?, ?, ?);", [about, filename, des, user_id, createAt, isDeleted], (err, results) => {
                            console.log(err)
                            res.send(results)
                            file.mv('../frontend/src/asset/upload/' + file.name)
                        })
                }
            }
        })
    }
})

router.get("/feedbackList", (req, res)=>{
    let isDeleted = "NO"
    db.query("SELECT feedback.id, feedback.about, feedback.image, feedback.descrption, feedback.feedbackCreateAt, user.name from feedback,name WHERE feedback.user_id = user.id AND feedback.isDeleted = ?", isDeleted,(err, results)=>{
        console.log(err)
        res.send(results)
    })
})


router.put("/deleteFeedback", (req, res) => {
    const id = req.body.id
    const updateAt = req.body.updateAt
    let isDeleted = "YES"

    db.query("UPDATE feedback SET isDeleted = ?, feedbackCreateAt = ? WHERE id = ?;", [isDeleted, updateAt, id], (err, results) => {
        console.log(err)
        res.send(results)
    })
})

module.exports = router;