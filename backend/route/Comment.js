const { constants } = require('buffer')
const { Router } = require('express')
const express = require('express')
const { type } = require('os')
const router = express.Router()

const db = require('../config/db')

router.post("/commentInternet", (req, res) => {
    const id = req.body.id
    const name = req.body.name
    const comment = req.body.comment
    const createAt = req.body.createAt
    let user_id = 0

    if (comment.length <= 0) {
        // res.send({ message: "comment can not be empty" })
        document.getElementById('submitComment').disabled = true;
    } else {
        db.query("SELECT * From user WHERE name = ?", name, (err, results) => {
            if (err) {
                console.log(err)
            }

            if (results.length > 0) {
                user_id = results[0].id
                db.query("INSERT INTO comment (comment, courseId, commentCreateAt, user_id) VALUES (?, ?, ?, ?);", [comment, id, createAt, user_id], (err, results) => {
                    console.log(err)
                    res.send(results)
                })
                console.log(user_id)
            }
        })

    }

})

router.get("/commentListById/:id", (req, res) => {
    const id = req.params.id
    db.query("SELECT comment.comment, comment.commentCreateAt, user.name from comment,user WHERE comment.user_id=user.id AND courseId = ?", id, (err, results) => {
        res.send(results)
        console.log(results)
    })
})

module.exports = router