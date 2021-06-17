const { constants } = require('buffer')
const { Router } = require('express')
const express = require('express')
const { type } = require('os')
const router = express.Router()

const db = require('../config/db')

router.post("/addCategory", (req, res) => {
    const category = req.body.category
    const createAt = req.body.createAt
    let updateAt = ""
    let isDeleted = "NO"
    
    if(category.length <= 0){
        res.send({message:"Category can not be empty"})
    }else{
        db.query("INSERT INTO category (category, categoryCreateAt, categoryUpdateAt, isDeleted) VALUES (?, ?, ?, ?);", [category, createAt, updateAt, isDeleted], (err, results) => {
            console.log(err)
            res.send(results)
        })
    }
})

router.get("/listCategory", (req, res) => {
    db.query("SELECT * FROM category", (err, results) => {
        res.send(results)
    })
})

router.get("/categoryById/:id", (req, res) => {
    const id = req.params.id
    db.query("SELECT * from category WHERE categoryId = ?", id, (err, results) => {
        res.send(results)
    })
})

module.exports = router;