const express = require('express')
const { type } = require('os')
const router = express.Router()

const db = require('../config/db')

router.post("/addBatch", (req, res) => {
    const batch = req.body.batch
    const createAt = req.body.createAt
    let isDeleted = "NO"

    db.query("INSERT INTO batch (batch, createAt, isDeleted) VALUES (?, ?, ?);", [batch, createAt, isDeleted], (err, results) => {
        console.log(err)
        res.send(results)
    })
})

router.get("/listBatch", (req, res) => {
    db.query("SELECT * FROM batch", (err, results) => {
        res.send(results)
    })
})

module.exports = router;