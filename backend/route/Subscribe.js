const { constants } = require('buffer')
const { Router } = require('express')
const express = require('express')
const { type } = require('os')
const router = express.Router()

const db = require('../config/db')

router.post("/subscribe", (req, res) => {
    const email = req.body.email
    let des = "Subscribe"

    if (email.length <= 0) {
        res.send({ message: "You must fill this email" })
    }else if (email.match(/[@]/) == null) {
        res.send({ message: "Email is invalid" })
    }else if (email.match(/[.]/) == null) {
        res.send({ message: "Email is invalid" })
    }else {
        db.query("INSERT INTO subscribe (email, des) VALUES (?, ?);", [email, des], (err, results) => {
            console.log(err)
            res.send(results)
        })
    }

})

module.exports = router;