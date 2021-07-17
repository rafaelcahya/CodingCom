const { constants } = require('buffer')
const { Router } = require('express')
const express = require('express')
const { type } = require('os')
const router = express.Router()

const db = require('../config/db')

router.post("/addFaq", (req, res) => {
    const question = req.body.question
    const answer = req.body.answer
    const category = req.body.category
    const description = req.body.description
    const createAt = req.body.createAt
    let isDeleted = "NO"
    if(question.length<=0 && answer.length<=0 && category.length<=0 && description.length<=0){
        res.send({message:"All data is not filled"})
    }else if(question.length <= 0){
        res.send({message:"Question is not filled"})
    }else if(answer.length <=0 ){
        res.send({message:"Answer is not filled"})
    }else if(category.length<=0){
        res.send({message:"Category is not selected"})
    }else if(description.length<=0){
        res.send({message:"Description is not filled"})
    }else{
        db.query("INSERT INTO help (question, answer, category, description, helpCreateAt, isDeleted) VALUES (?, ?, ?, ?, ?, ?);", [question, answer, category, description, createAt, isDeleted], (err, results) => {
            console.log(err)
            res.send({message:"Data has been added successfully"})
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
    let category = req.body.category
    let description = req.body.description
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
            }if(category.length<=0){
                category = results[0].category
            }if(description.length<=0){
                description=results[0].description
            }
            db.query("UPDATE help SET question = ?, answer = ?, category = ?, description = ?, helpUpdateAt = ? WHERE helpId=?;", [question, answer, category, description, updateAt, id], (err, results) => {
                res.send({message:"Data has been updated successfully"})
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