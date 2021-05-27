const { constants } = require('buffer')
const { Router } = require('express')
const express = require('express')
const { type } = require('os')
const router = express.Router()

const db = require('../config/db')

router.post("/rating", (req, res) => {
    const id = req.body.id
    const name = req.body.name
    const rating = req.body.rating
    const des = req.body.des
    const createAt = req.body.createAt
    let user_id = 0
    db.query("SELECT * From user WHERE name = ?", name, (err, results) => {
        if (err) {
            console.log(err)
        }

        if (results.length > 0) {
            user_id = results[0].id
            db.query("INSERT INTO rating (rating, description, user_id, course_id, ratingCreateAt) VALUES (?, ?, ?, ?, ?);", [rating, des, user_id, id, createAt], (err, results) => {
                console.log(err)
                res.send(results)
            })
            console.log(user_id)
        }
    })


})

module.exports = router;