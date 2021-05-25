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

    if (!req.files) {
        res.send({ message: "Logo can not be empty" })
    } else {
        const file = req.files.fileUpload
        const filename = file.name
        db.query("INSERT INTO jobs (companyName, companyEmail, companyLogo, overview, jobTitle, jobDescription, jobLocation, jobType, companyUrl, jobCreateAt, jobUpdateAt) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);", [companyName, companyEmail, filename, overview, job, des, location, type, url, createAt, updateAt], (err, results) => {
            console.log(err)
            res.send(results)
            file.mv('../frontend/src/asset/upload/' + file.name)
        })
    }
})

module.exports = router;