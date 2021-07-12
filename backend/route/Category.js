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

router.post("/EditCategory", (req, res) => {
    const id = req.body.id
    let category = req.body.category
    let categoryInfo = req.body.categoryInfo

    db.query("SELECT * From category WHERE categoryId = ?", id, (err, results) => {
        if (err) {
            console.log(err)
        }
        if (results.length > 0) {
            if (category.length <= 0) {
                category = results[0].category

            } if (categoryInfo.length <= 0) {
                categoryInfo = results[0].categoryInfo

            } 
            db.query("UPDATE category SET category = ?, categoryInfo = ?, categoryUpdateAt = ?  WHERE categoryId=?;", [ category, categoryInfo, updateAt, id], (err, results) => {
                console.log(err)
                res.send(results)
            })

        }
    })
})

module.exports = router;