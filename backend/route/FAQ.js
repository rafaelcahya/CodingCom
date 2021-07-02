const { constants } = require('buffer')
const { Router } = require('express')
const express = require('express')
const { type } = require('os')
const router = express.Router()

const db = require('../config/db')

router.post("/addFaq", (req, res) => {
    const question = req.body.question
    const answer = req.body.answer
    const createAt = req.body.createAt
    let isDeleted = "NO"

    if(question.length <= 0){
        res.send({message:"Question can not be empty"})
    }else if(answer.length <=0 ){
        res.send({message:"Answer can not be empty"})
    }else{
        db.query("INSERT INTO help (question, answer, helpCreateAt, isDeleted) VALUES (?, ?, ?, ?);", [question, answer, createAt, isDeleted], (err, results) => {
            console.log(err)
            res.send(results)
        })
    }
})

router.get("/listFaq", (req, res) => {
    let isDeleted = "NO"
    db.query("SELECT * from help WHERE isDeleted = ?",isDeleted, (err, results) => {
        res.send(results)
    })
})

router.get("/faqById/:id", (req, res) => {
    const id = req.params.id
    db.query("SELECT * from help WHERE helpId = ?",id, (err, results) => {
        res.send(results)
    })
})

router.post("/editFaq", (req, res) => {
    const id = req.body.id
    let question = req.body.question
    let answer = req.body.answer
    let updateAt = req.body.updateAt

    db.query("SELECT * From help WHERE helpId = ?", id, (err, results) => {
        if (err) {
            console.log(err)
        }

        if (results.length > 0) {
            if(question.length<=0){
                question = results[0].question
            }
            if(answer.length<=0){
                answer = results[0].answer
            }
            db.query("UPDATE help SET question = ?, answer = ?, helpUpdateAt = ? WHERE helpId=?;", [question, answer, updateAt, id], (err, results) => {
                res.send(results)
            }) 
        }
    })
    
})

router.put("/deleteFAQ", (req, res) => {
    const id = req.body.id
    const updateAt = req.body.updateAt
    let isDeleted = "YES"

    db.query("UPDATE help SET isDeleted = ?, helpUpdateAt = ? WHERE helpId = ?;", [isDeleted, updateAt, id], (err, results) => {
        console.log(err)
        res.send(results)
    })
})

module.exports = router;