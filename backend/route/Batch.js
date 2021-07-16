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

    if(batch.length<=0 && startDate.length<=0 && endDate.length<=0){
        res.send({message:"All form must be filled"})
    }else if(batch.length<=0){
        res.send({message:"Batch must be filled"})
    }else if(startDate.length<=0){
        res.send({message:"Start date must be filled"})
    }else if(endDate.length<=0){
        res.send({message:"End date must be filled"})
    }else{
        db.query("INSERT INTO batch (batch, startDate, endDate, createAt, isDeleted) VALUES (?, ?, ?, ?, ?);", [batch, startDate, endDate, createAt, isDeleted], (err, results) => {
            console.log(err)
            res.send({message:"Batch successfully submited"})
        })
    }
})

router.get("/listBatch", (req, res) => {
    let isDeleted = "NO"
    db.query("SELECT * FROM batch WHERE isDeleted = ?",isDeleted, (err, results) => {
        res.send(results)
    })
})

router.put("/deleteBatch", (req, res) => {
    const id = req.body.id
    let isDeleted = "YES"

    db.query("UPDATE batch SET isDeleted = ? WHERE batchId = ?;", [isDeleted, id], (err, results) => {
        console.log(err)
        res.send(results)
    })
})

module.exports = router;