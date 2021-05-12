const express = require('express')
const { type } = require('os')
const router = express.Router()

const db = require('../config/db')

const nodemailer = require('nodemailer')

router.post("/login", (req, res) => {

    const username = req.body.name
    const password = req.body.password
    var crypto = require('crypto')
    var hash = crypto.createHash('md5').update(password).digest('hex')

    db.query("SELECT * From mentor WHERE username = ?", username, (err, results) => {
        if (err) {
            console.log(err)
        }
        if (results.length > 0) {
            if (hash.match(results[0].password) != null) {
                res.json({ loggedIn: true, name: username })

            } else if (username.length <= 0) {
                res.send({ message: "You must fill username" })
            } else if (password.length <= 0) {
                res.send({ message: "You must fill password" })
            }
            // else if (password.length <= 8) {
            //     res.json({ loggedIn: true, message: "Password at least has 8 character" })
            // } else if (password.length >= 20) {
            //     res.json({ loggedIn: true, message: "Password must be less than 20 character" })
            // } else if (password.match(/[A-Z]/) == null) {
            //     res.json({ loggedIn: true, message: "Password at least 1 uppercase" })
            // } else if (password.match(/[a-z]/) == null) {
            //     res.json({ loggedIn: true, message: "Password at least 1 lowercase" })
            // } else if (password.match(/[0-9]/) == null) {
            //     res.json({ loggedIn: true, message: "Password at least 1 number" })
            // }
            else {
                res.json({ loggedIn: false, message: "Wrong Username / Password" })

            }
        } else {
            res.json({ loggedIn: false, message: "Wrong Username / Password" })

        }
    })
})

module.exports = router;