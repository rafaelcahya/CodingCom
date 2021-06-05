const express = require('express')
const { type } = require('os')
const router = express.Router()

const db = require('../config/db')

router.post("/addBatch", (req, res) => {
    const batch = req.body.batch
    const startDate = req.body.startDate
    const endDate = req.body.endDate
    const createAt = req.body.createAt
    let isDeleted = "NO"

    db.query("INSERT INTO batch (batch, startDate, endDate, createAt, isDeleted) VALUES (?, ?, ?, ?, ?);", [batch, startDate, endDate, createAt, isDeleted], (err, results) => {
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