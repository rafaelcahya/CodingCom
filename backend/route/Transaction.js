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
    let isDeleted = "NO"

    db.query("SELECT * From user WHERE name = ?", name, (err, results) => {
        if (err) {
            console.log(err)
        }

        if (results.length > 0) {
            user_id = results[0].id
            db.query("INSERT INTO transaction (user_id, paket_id, status, transactionCreateAt, transactionUpdateAt, isDeleted) VALUES (?, ?, ?, ?, ?, ?);", [user_id, paket_id, status, createAt, updateAt, isDeleted], (err, results) => {
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
    let isDeleted = "NO"

    db.query("SELECT * From user WHERE name = ?", name, (err, results) => {
        if (err) {
            console.log(err)
        }

        if (results.length > 0) {
            user_id = results[0].id
            db.query("INSERT INTO transaction (user_id, paket_id, status, transactionCreateAt, transactionUpdateAt isDeleted) VALUES (?, ?, ?, ?, ?, ?);", [user_id, paket_id, status, createAt, updateAt, isDeleted], (err, results) => {
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
    let isDeleted = "NO"

    db.query("SELECT * From user WHERE name = ?", name, (err, results) => {
        if (err) {
            console.log(err)
        }

        if (results.length > 0) {
            user_id = results[0].id
            db.query("INSERT INTO transaction (user_id, paket_id, status, transactionCreateAt, transactionUpdateAt, isDeleted) VALUES (?, ?, ?, ?, ?, ?);", [user_id, paket_id, status, createAt, updateAt, isDeleted], (err, results) => {
                console.log(err)
                res.send(results)
            })
            console.log(user_id)
        }
    })
})

router.get("/TransactionList", (req, res) => {
    let isDeleted = "NO"
    let status = "Pending"
    db.query("SELECT transaction.transactionId, transaction.user_id, transaction.paket_id, transaction.status, transaction.transactionCreateAt, transaction.transactionUpdateAt, user.fullname, user.email, user.name, paket.tipe_paket FROM transaction,user,paket WHERE transaction.user_id = user.id AND transaction.paket_id = paket.id AND transaction.isDeleted = ? AND transaction.status = ?",[isDeleted, status], (err, results) => {
        res.send(results)
    })
})

router.get("/TransactionListAPPROVED", (req, res) => {
    let isDeleted = "NO"
    let status = "APPROVED"
    db.query("SELECT transaction.transactionId, transaction.user_id, transaction.paket_id, transaction.status, transaction.transactionCreateAt, transaction.transactionUpdateAt, user.fullname, user.email, user.name, paket.tipe_paket FROM transaction,user,paket WHERE transaction.user_id = user.id AND transaction.paket_id = paket.id AND transaction.isDeleted = ? AND transaction.status = ?",[isDeleted, status], (err, results) => {
        res.send(results)
    })
})

router.get("/TransactionListREJECTED", (req, res) => {
    let isDeleted = "NO"
    let status = "REJECTED"
    db.query("SELECT transaction.transactionId, transaction.user_id, transaction.paket_id, transaction.status, transaction.transactionCreateAt, transaction.transactionUpdateAt, user.fullname, user.email, user.name, paket.tipe_paket FROM transaction,user,paket WHERE transaction.user_id = user.id AND transaction.paket_id = paket.id AND transaction.isDeleted = ? AND transaction.status = ?",[isDeleted, status], (err, results) => {
        res.send(results)
    })
})

router.put("/updatePayment", (req, res) => {
    const id = req.body.id
    const status = req.body.status
    const updateAt = req.body.updateAt

    db.query("UPDATE transaction SET status = ?, transactionUpdateAt = ? WHERE transactionId = ?;", [status, updateAt, id], (err, results) => {
        console.log(err)
        res.send(results)
    })
})

router.put("/addeditKuota", (req, res) => {
    const id = req.body.userId
    const paket_id = req.body.paket_id
    const status = req.body.status
    const createAt = req.body.createAt
    const updateAt = req.body.updateAt
    let update = ""
    let kuotaConsultation = 0
    let kuotaSession = 0
    if (status == "APPROVED") {
        kuotaConsultation = 7
        kuotaSession = 5
        db.query("SELECT * From userkuota WHERE user_id = ?", id, (err, results) => {
            if (err) {
                console.log(err)
            }
            if (results.length > 0) {
                kuotaConsultation = results[0].classConsultation + 5
                kuotaSession = results[0].classSession + 5
                if (paket_id == 2) {
                    db.query("UPDATE userkuota SET classSession = ?, kuotaUpdateAt = ? WHERE user_id = ?;", [kuotaSession, updateAt, id], (err, results) => {
                        console.log(err)
                        res.send(results)
                    })
                } else if (paket_id == 3) {
                    db.query("UPDATE userkuota SET classConsultation = ?, kuotaUpdateAt = ? WHERE user_id = ?;", [kuotaConsultation, updateAt, id], (err, results) => {
                        console.log(err)
                        res.send(results)
                    })
                }

            } else {
                db.query("INSERT INTO userkuota (classConsultation, classSession, user_id, kuotaCreateAt, kuotaUpdateAt) VALUES (?, ?, ?, ?, ?);", [kuotaConsultation, kuotaSession, id, createAt, update], (err, results) => {
                    console.log(err)
                    res.send(results)
                })
            }
        })

    }

})

module.exports = router;