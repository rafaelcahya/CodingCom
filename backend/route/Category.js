const { constants } = require('buffer')
const { Router } = require('express')
const express = require('express')
const { type } = require('os')
const router = express.Router()

const db = require('../config/db')

router.post("/addCategory", (req, res) => {
    const category = req.body.category
    const categoryInfo = req.body.categoryInfo
    const createAt = req.body.createAt
    let updateAt = ""
    let isDeleted = "NO"
    
    if(category.length <= 0){
        res.send({message:"Category can not be empty"})
    }else{
        db.query("INSERT INTO category (category, categoryInfo categoryCreateAt, categoryUpdateAt, isDeleted) VALUES (?, ?, ?, ?, ?);", [category, categoryInfo, createAt, updateAt, isDeleted], (err, results) => {
            console.log(err)
            res.send(results)
        })
    }
})

router.get("/listCategory", (req, res) => {
    let isDeleted = "NO"
    db.query("SELECT * FROM category WHERE isDeleted = ?",isDeleted, (err, results) => {
        res.send(results)
    })
})

router.get("/categoryById/:id/:hash", (req, res) => {
    const id = req.params.id
    db.query("SELECT * from category WHERE categoryId = ?", id, (err, results) => {
        res.send(results)
    })
})

router.put("/deleteCategory", (req, res) => {
    const id = req.body.id
    const updateAt = req.body.updateAt
    let isDeleted = "YES"

    db.query("UPDATE category SET isDeleted = ?, categoryUpdateAt = ? WHERE categoryId = ?;", [isDeleted, updateAt, id], (err, results) => {
        console.log(err)
        res.send(results)
    })
})

module.exports = router;