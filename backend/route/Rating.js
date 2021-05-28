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
            db.query("SELECT * From rating WHERE user_id = ? AND course_id = ?", [user_id, id], (err, results) => {
                if (err) {
                    console.log(err)
                }
                if (!results.length) {
                    db.query("INSERT INTO rating (rating, description, user_id, course_id, ratingCreateAt) VALUES (?, ?, ?, ?, ?);", [rating, des, user_id, id, createAt], (err, results) => {
                        console.log(err)
                        res.send(results)
                    })
                } else {
                    db.query("UPDATE rating SET rating = ?, description = ?, ratingCreateAt = ? WHERE user_id = ?;", [rating, des, createAt, user_id], (err, results) => {
                        console.log(err)
                        res.send(results)
                    }) 
                }
            })
            console.log(user_id)
        }
    })
})

router.get("/ratingList", (req, res) => {
    db.query("SELECT rating.rating, rating.description, rating.ratingCreateAt, user.name from rating,user WHERE rating.user_id=user.id", (err, results) => {
        res.send(results)
    })
})

router.get("/AvgratingList", (req, res) => {
    db.query("SELECT AVG(rating) AS AverageRating FROM rating", (err, results) => {
        res.send(results)
    })
})

module.exports = router;