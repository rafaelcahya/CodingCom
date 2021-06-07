const express = require('express')
const { type } = require('os')
const router = express.Router()

const db = require('../config/db')

const nodemailer = require('nodemailer')

router.post("/updateStatus", (req, res) => {
    let status = "PENDING"
    const name = req.body.name
    const createAt = req.body.createAt
    let user_id = 0
    let paket_id = 1
    let updateAt =""

    db.query("SELECT * From user WHERE name = ?", name, (err, results) => {
        if (err) {
            console.log(err)
        }

        if (results.length > 0) {
            user_id = results[0].id
            db.query("INSERT INTO transaction (user_id, paket_id, status, transactionCreateAt, transactionUpdateAt) VALUES (?, ?, ?, ?, ?);", [user_id, paket_id, status, createAt, updateAt], (err, results) => {
                console.log(err)
                res.send(results)
            })
            console.log(user_id)
        }
    })
})

router.post("/updateStatusClassSession", (req, res) => {
    let status = "PENDING"
    const name = req.body.name
    const createAt = req.body.createAt
    let user_id = 0
    let paket_id = 2
    let updateAt =""

    db.query("SELECT * From user WHERE name = ?", name, (err, results) => {
        if (err) {
            console.log(err)
        }

        if (results.length > 0) {
            user_id = results[0].id
            db.query("INSERT INTO transaction (user_id, paket_id, status, transactionCreateAt, transactionUpdateAt) VALUES (?, ?, ?, ?, ?);", [user_id, paket_id, status, createAt, updateAt], (err, results) => {
                console.log(err)
                res.send(results)
            })
            console.log(user_id)
        }
    })
})

router.post("/updateStatusClassConsultation", (req, res) => {
    let status = "PENDING"
    const name = req.body.name
    const createAt = req.body.createAt
    let user_id = 0
    let paket_id = 3
    let updateAt =""

    db.query("SELECT * From user WHERE name = ?", name, (err, results) => {
        if (err) {
            console.log(err)
        }

        if (results.length > 0) {
            user_id = results[0].id
            db.query("INSERT INTO transaction (user_id, paket_id, status, transactionCreateAt, transactionUpdateAt) VALUES (?, ?, ?, ?, ?);", [user_id, paket_id, status, createAt, updateAt], (err, results) => {
                console.log(err)
                res.send(results)
            })
            console.log(user_id)
        }
    })
})

module.exports = router;