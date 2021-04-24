const { constants } = require('buffer')
const { Router } = require('express')
const express = require('express')
const { type } = require('os')
const router = express.Router()

const db = require('../config/db')

router.post("/commentInternet", (req, res) => {
    const name = req.body.name
    const comment = req.body.comment
    const createAt = req.body.createAt
    let user_id = 0
    let topik = "Internet"

    if (comment.length <= 0) {
        res.send({ message: "comment can not be empty" })
    } else {

        db.query("SELECT * From user WHERE name = ?", name, (err, results) => {
            if (err) {
                console.log(err)
            }

            if (results.length > 0) {
                user_id = results[0].id
                db.query("INSERT INTO comment (comment, topik, createAt, user_id) VALUES (?, ?, ?, ?);", [comment, topik, createAt, user_id], (err, results) => {
                    console.log(err)
                    res.send(results)
                })
                console.log(user_id)
            }
        })
    }

})

router.get("/commentListInternet", (req, res) => {
    let topik = "Internet"
    db.query("SELECT comment.comment, comment.createAt, user.name from comment,user WHERE comment.user_id=user.id AND topik = ?", topik, (err, results) => {
        res.send(results)
        console.log(results)
    })
})

router.post("/commentInternetWork", (req, res) => {
    const name = req.body.name
    const comment = req.body.comment
    const createAt = req.body.createAt
    let user_id = 0
    let topik = "Internet Work"

    if(comment.length<=0){
        res.send({ message: "comment can not be empty" })
    }else{

    db.query("SELECT * From user WHERE name = ?", name, (err, results) => {
        if (err) {
            console.log(err)
        }

        if (results.length > 0) {
            user_id = results[0].id
            db.query("INSERT INTO comment (comment, topik, createAt, user_id) VALUES (?, ?, ?, ?);", [comment, topik, createAt, user_id], (err, results) => {
                console.log(err)
                res.send(results)
            })
            console.log(user_id)
        }
    })
    }
})

router.get("/commentListInternetWork", (req, res) => {
    let topik = "Internet Work"
    db.query("SELECT comment.comment, comment.createAt, user.name from comment,user WHERE comment.user_id=user.id AND topik = ?", topik, (err, results) => {
        res.send(results)
        console.log(results)
    })
})

router.post("/commentWhatishttp", (req, res) => {
    const name = req.body.name
    const comment = req.body.comment
    const createAt = req.body.createAt
    let user_id = 0
    let topik = "What is http"

    if(comment.length<=0){
        res.send({ message: "comment can not be empty" })
    }else{

    db.query("SELECT * From user WHERE name = ?", name, (err, results) => {
        if (err) {
            console.log(err)
        }

        if (results.length > 0) {
            user_id = results[0].id
            db.query("INSERT INTO comment (comment, topik, createAt, user_id) VALUES (?, ?, ?, ?);", [comment, topik, createAt, user_id], (err, results) => {
                console.log(err)
                res.send(results)
            })
            console.log(user_id)
        }
    })
}

})

router.get("/commentListWhatishttp", (req, res) => {
    let topik = "What is http"
    db.query("SELECT comment.comment, comment.createAt, user.name from comment,user WHERE comment.user_id=user.id AND topik = ?", topik, (err, results) => {
        res.send(results)
        console.log(results)
    })
})

router.post("/commentWhatisInternet", (req, res) => {
    const name = req.body.name
    const comment = req.body.comment
    const createAt = req.body.createAt
    let user_id = 0
    let topik = "What is internet"

    if(comment.length<=0){
        res.send({ message: "comment can not be empty" })
    }else{

    db.query("SELECT * From user WHERE name = ?", name, (err, results) => {
        if (err) {
            console.log(err)
        }

        if (results.length > 0) {
            user_id = results[0].id
            db.query("INSERT INTO comment (comment, topik, createAt, user_id) VALUES (?, ?, ?, ?);", [comment, topik, createAt, user_id], (err, results) => {
                console.log(err)
                res.send(results)
            })
            console.log(user_id)
        }
    })
    }
})

router.get("/commentListWhatisInternet", (req, res) => {
    let topik = "What is internet"
    db.query("SELECT comment.comment, comment.createAt, user.name from comment,user WHERE comment.user_id=user.id AND topik = ?", topik, (err, results) => {
        res.send(results)
        console.log(results)
    })
})

router.post("/commentBrowser", (req, res) => {
    const name = req.body.name
    const comment = req.body.comment
    const createAt = req.body.createAt
    let user_id = 0
    let topik = "Browser"

    if(comment.length<=0){
        res.send({ message: "comment can not be empty" })
    }else{
    db.query("SELECT * From user WHERE name = ?", name, (err, results) => {
        if (err) {
            console.log(err)
        }

        if (results.length > 0) {
            user_id = results[0].id
            db.query("INSERT INTO comment (comment, topik, createAt, user_id) VALUES (?, ?, ?, ?);", [comment, topik, createAt, user_id], (err, results) => {
                console.log(err)
                res.send(results)
            })
            console.log(user_id)
        }
    })
    }
})

router.get("/commentListBrowser", (req, res) => {
    let topik = "Browser"
    db.query("SELECT comment.comment, comment.createAt, user.name from comment,user WHERE comment.user_id=user.id AND topik = ?", topik, (err, results) => {
        res.send(results)
        console.log(results)
    })
})

router.post("/commentDNS", (req, res) => {
    const name = req.body.name
    const comment = req.body.comment
    const createAt = req.body.createAt
    let user_id = 0
    let topik = "DNS"

    if(comment.length<=0){
        res.send({ message: "comment can not be empty" })
    }else{
    db.query("SELECT * From user WHERE name = ?", name, (err, results) => {
        if (err) {
            console.log(err)
        }

        if (results.length > 0) {
            user_id = results[0].id
            db.query("INSERT INTO comment (comment, topik, createAt, user_id) VALUES (?, ?, ?, ?);", [comment, topik, createAt, user_id], (err, results) => {
                console.log(err)
                res.send(results)
            })
            console.log(user_id)
        }
    })
    }
})

router.get("/commentListDNS", (req, res) => {
    let topik = "DNS"
    db.query("SELECT comment.comment, comment.createAt, user.name from comment,user WHERE comment.user_id=user.id AND topik = ?", topik, (err, results) => {
        res.send(results)
        console.log(results)
    })
})

router.post("/commentDomain", (req, res) => {
    const name = req.body.name
    const comment = req.body.comment
    const createAt = req.body.createAt
    let user_id = 0
    let topik = "Domain"

    if(comment.length<=0){
        res.send({ message: "comment can not be empty" })
    }else{
    db.query("SELECT * From user WHERE name = ?", name, (err, results) => {
        if (err) {
            console.log(err)
        }

        if (results.length > 0) {
            user_id = results[0].id
            db.query("INSERT INTO comment (comment, topik, createAt, user_id) VALUES (?, ?, ?, ?);", [comment, topik, createAt, user_id], (err, results) => {
                console.log(err)
                res.send(results)
            })
            console.log(user_id)
        }
    })
    }
})

router.get("/commentListDomain", (req, res) => {
    let topik = "Domain"
    db.query("SELECT comment.comment, comment.createAt, user.name from comment,user WHERE comment.user_id=user.id AND topik = ?", topik, (err, results) => {
        res.send(results)
        console.log(results)
    })
})

router.post("/commentHosting", (req, res) => {
    const name = req.body.name
    const comment = req.body.comment
    const createAt = req.body.createAt
    let user_id = 0
    let topik = "Hosting"

    if(comment.length<=0){
        res.send({ message: "comment can not be empty" })
    }else{
    db.query("SELECT * From user WHERE name = ?", name, (err, results) => {
        if (err) {
            console.log(err)
        }

        if (results.length > 0) {
            user_id = results[0].id
            db.query("INSERT INTO comment (comment, topik, createAt, user_id) VALUES (?, ?, ?, ?);", [comment, topik, createAt, user_id], (err, results) => {
                console.log(err)
                res.send(results)
            })
            console.log(user_id)
        }
    })
    }
})

router.get("/commentListHosting", (req, res) => {
    let topik = "Hosting"
    db.query("SELECT comment.comment, comment.createAt, user.name from comment,user WHERE comment.user_id=user.id AND topik = ?", topik, (err, results) => {
        res.send(results)
        console.log(results)
    })
})

module.exports = router