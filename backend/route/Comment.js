const { constants } = require('buffer')
const { Router } = require('express')
const express = require('express')
const { type } = require('os')
const router = express.Router()

const db = require('../config/db')

router.post("/commentInternet", (req, res) => {
    const name = req.body.name
    let user_id = 0
    const comment = req.body.comment
    const createAt = req.body.createAt

    db.query("SELECT * From user WHERE name = ?", name, (err, results) => {
        if (err) {
            console.log(err)
        }
        
        if (results.length > 0) {
            user_id = results[0].id
            db.query("INSERT INTO comment (comment, createAt, user_id) VALUES (?, ?, ?);", [comment, createAt, user_id], (err, results) => {
                console.log(err)
                res.send(results)
            })
            console.log(user_id)
        }
    })
    
})

module.exports = router 