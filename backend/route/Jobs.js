const { constants } = require('buffer')
const { Router } = require('express')
const express = require('express')
const { fdatasync } = require('fs')
const { type } = require('os')
const router = express.Router()

const db = require('../config/db')

router.post("/jobs", (req, res) => {
    const job = req.body.job
    const companyName = req.body.companyName
    const companyEmail = req.body.companyEmail
    const overview = req.body.overview
    const location = req.body.location
    const type = req.body.type
    const des = req.body.des
    const url = req.body.url
    const createAt = req.body.createAt
    let updateAt = ""
    let isDeleted = "NO"

    if (!req.files) {
        res.send({ message: "Logo can not be empty" })
    } else {
        const file = req.files.fileUpload
        const filename = file.name
        db.query("INSERT INTO jobs (companyName, companyEmail, companyLogo, overview, jobTitle, jobDescription, jobLocation, jobType, companyUrl, jobCreateAt, jobUpdateAt, isDeleted) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);", [companyName, companyEmail, filename, overview, job, des, location, type, url, createAt, updateAt, isDeleted], (err, results) => {
            console.log(err)
            res.send(results)
            file.mv('../frontend/src/asset/upload/' + file.name)
        })
    }
})

router.post("/apply", (req, res) => {
    const name = req.body.name
    const id = req.body.id
    const createAt = req.body.createAt
    const lockDate = req.body.lockDate
    let user_id = 0
    let status = "Pending"
    let isDeleted = "NO"

    db.query("SELECT * From user WHERE name = ?", name, (err, results) => {
        if (err) {
            console.log(err)
        }

        if (results.length > 0) {
            user_id = results[0].id
            db.query("INSERT INTO application (user_id, job_id, status, applicationCreateAt, applicationLocked, isDeleted) VALUES (?, ?, ?, ?, ?, ?);", [user_id, id, status, createAt, lockDate, isDeleted], (err, results) => {
                console.log(err)
                res.send(results)
            })
            console.log(user_id)
            console.log(id)
        }
    })

})

router.get("/ListJobs", (req, res) => {
    let isDeleted = "NO"
    db.query("SELECT * from jobs WHERE isDeleted = ?",isDeleted, (err, results) => {
        res.send(results)
    })
})

router.get("/jobById/:id", (req, res) => {
    const id = req.params.id
    db.query("SELECT * from jobs WHERE jobsId = ?", id, (err, results) => {
        res.send(results)
    })
})

router.get("/ListJobsCount", (req, res) => {
    let isDeleted = "NO"
    db.query("SELECT COUNT(jobsId) AS CountJobs from jobs WHERE isDeleted = ?",isDeleted, (err, results) => {
        res.send(results)
    })
})

router.get("/applicationById/:name/:id", (req, res) => {
    const id = req.params.id
    const name = req.params.name
    let status = "Pending"
    let user_id = 0

    db.query("SELECT * From user WHERE name = ?", name, (err, results) => {
        if (err) {
            console.log(err)
        }

        if (results.length > 0) {
            user_id = results[0].id
            db.query("SELECT * from application WHERE job_id = ? AND user_id = ? AND status = ?", [id, user_id, status], (err, results) => {
                res.send(results)
                console.log(results)
            })
        }
    })


})

router.post("/update", (req, res) => {
    const id = req.body.id
    const name = req.body.name
    let status = "Not Responded"
    let user_id = 0

    db.query("SELECT * From user WHERE name = ?", name, (err, results) => {
        if (err) {
            console.log(err)
        }

        if (results.length > 0) {
            user_id = results[0].id
            db.query("UPDATE application SET status = ? WHERE job_id = ? AND user_id = ?;", [status, id, user_id], (err, results) => {
                res.send(results)
            }) 
        }
    })

})

router.put("/deleteJobs", (req, res) => {
    const id = req.body.id
    const updateAt = req.body.updateAt
    let isDeleted = "YES"

    db.query("UPDATE jobs SET isDeleted = ?, jobUpdateAt = ? WHERE jobsId = ?;", [isDeleted, updateAt, id], (err, results) => {
        console.log(err)
        res.send(results)
    })
})

router.post("/updateJobs", (req, res) => {
    const id = req.body.id
    let companyName = req.body.companyName
    let companyEmail = req.body.companyEmail
    let job = req.body.job
    let overview = req.body.overview
    let location = req.body.location
    let type = req.body.type
    let url = req.body.url
    let updateAt = req.body.updateAt

        db.query("SELECT * From jobs WHERE jobsid = ?", id, (err, results) => {
            if (err) {
                console.log(err)
            }
            if (results.length > 0) {
                if (companyName.length <= 0) {
                    companyName = results[0].companyName

                } if (companyEmail.length <= 0) {
                    companyEmail = results[0].companyEmail

                } if (job.length <= 0) {
                    job = results[0].jobTitle

                } if (overview.length <= 0) {
                    overview = results[0].overview

                } if (location.length <= 0) {
                    location = results[0].jobLocation

                } if (type.length <= 0) {
                    type = results[0].JobType
                } if (des.length <= 0) {
                    des = results[0].jobDescription
                } if (url.length <= 0) {
                    url = results[0].companyUrl
                }if (!req.files) {
                    db.query("UPDATE jobs SET companyName = ?, companyEmail = ?, overview = ?, jobLocation=?, jobType = ?, companyUrl = ?, jobDescription = ?, jobUpdateAt = ?  WHERE id=?;", [companyName, companyEmail, overview, location, type, url, des, updateAt, id], (err, results) => {
                        console.log(err)
                        res.send(results)
                    })
                } else {
                    const file = req.files.fileUpload
                    const filename = file.name
                    db.query("UPDATE jobs SET companyName = ?, companyLogo = ?, companyEmail = ?, overview = ?, jobLocation=?, jobType = ?, companyUrl = ?, jobDescription = ?, jobUpdateAt = ?  WHERE id=?;", [companyName, filename, companyEmail, overview, location, type, url, des, updateAt, id], (err, results) => {
                        console.log(err)
                        res.send(results)
                        file.mv('../frontend/src/asset/upload/' + file.name)
                    })
                }
            }
        })
})

module.exports = router;