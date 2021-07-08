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
    let isDeleted = "NO"
    db.query("SELECT * From user WHERE name = ?", name, (err, results) => {
        if (err) {
            console.log(err)
        }

        if (results.length > 0) {
            user_id = results[0].id
            db.query("SELECT * From rating WHERE user_id = ? AND topik_id = ?", [user_id, id], (err, results) => {
                if (err) {
                    console.log(err)
                }
                if (!results.length) {
                    db.query("INSERT INTO rating (rating, description, user_id, topik_id, ratingCreateAt, isDeleted) VALUES (?, ?, ?, ?, ?, ?);", [rating, des, user_id, id, createAt, isDeleted], (err, results) => {
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

router.get("/ratingList/:id", (req, res) => {
    const id = req.params.id
    let isDeleted = "NO"
    db.query("SELECT rating.rating, rating.description, rating.ratingCreateAt, user.name from rating,user WHERE rating.user_id=user.id AND rating.topik_id = ? AND rating.isDeleted = ?",[id,isDeleted], (err, results) => {
        res.send(results)
    })
})

router.get("/AvgratingList/:id", (req, res) => {
    const id = req.params.id
    let isDeleted = "NO"
    db.query("SELECT AVG(rating) AS AverageRating, COUNT(ratingId) AS SumRating FROM rating WHERE rating.topik_id = ? AND rating.isDeleted = ?",[id,isDeleted], (err, results) => {
        res.send(results)
        console.log(results)
    })
})

router.get("/Count5/:id", (req, res) => {
    const id = req.params.id
    let isDeleted = "NO"
    let rating = 5
    db.query("SELECT COUNT(ratingId) AS Rating5 FROM rating WHERE rating.topik_id = ? AND rating.isDeleted = ? AND rating.rating = ?",[id,isDeleted,rating], (err, results) => {
        res.send(results)
        console.log(results)
    })
})

router.get("/Count4/:id", (req, res) => {
    const id = req.params.id
    let isDeleted = "NO"
    let rating = 4
    db.query("SELECT COUNT(ratingId) AS Rating4 FROM rating WHERE rating.topik_id = ? AND rating.isDeleted = ? AND rating.rating = ?",[id,isDeleted,rating], (err, results) => {
        res.send(results)
        console.log(results)
    })
})

router.get("/Count3/:id", (req, res) => {
    const id = req.params.id
    let isDeleted = "NO"
    let rating = 3
    db.query("SELECT COUNT(ratingId) AS Rating3 FROM rating WHERE rating.topik_id = ? AND rating.isDeleted = ? AND rating.rating = ?",[id,isDeleted,rating], (err, results) => {
        res.send(results)
        console.log(results)
    })
})

router.get("/Count2/:id", (req, res) => {
    const id = req.params.id
    let isDeleted = "NO"
    let rating = 2
    db.query("SELECT COUNT(ratingId) AS Rating2 FROM rating WHERE rating.topik_id = ? AND rating.isDeleted = ? AND rating.rating = ?",[id,isDeleted,rating], (err, results) => {
        res.send(results)
        console.log(results)
    })
})

router.get("/Count1/:id", (req, res) => {
    const id = req.params.id
    let isDeleted = "NO"
    let rating = 1
    db.query("SELECT COUNT(ratingId) AS Rating1 FROM rating WHERE rating.topik_id = ? AND rating.isDeleted = ? AND rating.rating = ?",[id,isDeleted,rating], (err, results) => {
        res.send(results)
        console.log(results)
    })
})

router.put("/deleteRating", (req, res) => {
    const id = req.body.id
    const updateAt = req.body.updateAt
    let isDeleted = "YES"

    db.query("UPDATE rating SET isDeleted = ?, ratingCreateAt = ? WHERE ratingId = ?;", [isDeleted, updateAt, id], (err, results) => {
        console.log(err)
        res.send(results)
    })
})

module.exports = router;