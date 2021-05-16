const { constants } = require('buffer')
const { Router } = require('express')
const express = require('express')
const { fdatasync } = require('fs')
const { type } = require('os')
const router = express.Router()

const db = require('../config/db')

router.post("/feedback", (req, res) => {
    const name = req.body.name
    let fullname = req.body.fullname
    let email = req.body.email
    const about = req.body.about
    const des = req.body.des
    let namefile = ""
    const createAt = req.body.createAt
    let user_id = 0

    if (about.length <= 0) {
        res.send({ message: "You must fill about" })
    } else if (des.length <= 0) {
        res.send({ message: "You must fill description" })
    } else {
        db.query("SELECT * From user WHERE name = ?", name, (err, results) => {
            if (err) {
                console.log(err)
            }
            if (results.length > 0) {
                user_id = results[0].id
                if (fullname.length <= 0) {
                    fullname = results[0].fullname

                } if (email.length <= 0) {
                    email = results[0].email
                }
                if (!req.files) {
                    db.query("INSERT INTO feedback (fullname, email, about, image, description, user_id, createAt) VALUES (?, ?, ?, ?, ?, ?, ?);", [fullname, email, about, namefile, des, user_id, createAt], (err, results) => {
                        console.log(err)
                        res.send(results)
                    })
                } else {
                    const file = req.files.fileUpload
                    const filename = file.name
                    if (file.mimetype == "image/jpeg" || file.mimetype == "image/png" || file.mimetype == "image/gif") {
                        db.query("INSERT INTO feedback (fullname, email, about, image, description, user_id, createAt) VALUES (?, ?, ?, ?, ?, ?, ?);", [fullname, email, about, filename, des, user_id, createAt], (err, results) => {
                            console.log(err)
                            res.send(results)
                            file.mv('../frontend/src/asset/upload/' + file.name)
                        })
                    } else {
                        res.send({ message: "This format is not allowed. Format allowed is JPG,DIF,PNG" })
                    }
                }
            }
        })
    }
})

module.exports = router;