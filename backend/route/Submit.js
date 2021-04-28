const { constants } = require('buffer')
const { Router } = require('express')
const express = require('express')
const { type } = require('os')
const router = express.Router()

const db = require('../config/db')

router.post("/submit", (req, res) => {
    const name = req.body.name
    const title = req.body.title
    const url = req.body.url
    const description = req.body.description
    const live_site_url = req.body.live_site_url
    const createAt = req.body.createAt
    let user_id = 0
    
    if (title.length <= 0) {
        res.send({ message: "Please add the project title" })
    } else if (url.length <= 0) {
        res.send({ message: "Please add the repository URL" })
    } else {
        db.query("SELECT * From user WHERE name = ?", name, (err, results) => {
            if (err) {
                console.log(err)
            }

            if (results.length > 0) {
                user_id = results[0].id
                db.query("INSERT INTO submit (title, url, live_site_url, description, user_id, createAt) VALUES (?, ?, ?, ?, ?, ?);", [title, url, live_site_url, description, user_id, createAt], (err, results) => {
                    console.log(err)
                    res.send(results)
                })
                console.log(user_id)
            }
        })
    }
})

router.get("/submitList", (req, res) => {
    db.query("SELECT submit.id, submit.title, submit.url, submit.live_site_url, submit.description, submit.createAt, user.name from submit,user WHERE submit.user_id=user.id",(err, results) => {
        res.send(results)
        console.log(results)
    })
})

module.exports = router;