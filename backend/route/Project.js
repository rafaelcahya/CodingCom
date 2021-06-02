const { constants } = require('buffer')
const { Router } = require('express')
const express = require('express')
const { type } = require('os')
const router = express.Router()

const db = require('../config/db')

router.post("/project", (req, res) => {
    const title = req.body.title
    const info = req.body.info
    const brief = req.body.brief
    const createAt = req.body.createAt
    let updateAt = ""
    let isDeleted = "NO"

    if(title.length <= 0 ){
        res.send({message:"Project Title can not be empty"})
    }else if(info.length <= 0){
        res.send({message:"Project Info can not be empty"})
    }else if(brief.length <=0 ){
        res.send({message:"Project Brief can not be empty"})
    }else if (!req.files) {
        res.send({message:"Image can not be empty"})
    } else {
        const file = req.files.fileUpload
        const filename = file.name
            db.query("INSERT INTO project (projectTitle, projectInfo, image, projectBrief, projectCreateAt, projectUpdateAt, isDeleted) VALUES (?, ?, ?, ?, ?, ?, ?);", [title, info, filename, brief, createAt, updateAt, isDeleted], (err, results) => {
                console.log(err)
                res.send(results)
                // file.mv('../frontend/src/asset/fileUpload/' + file.name)
                file.mv('../frontend/src/asset/upload/' + file.name)
            })
    }
})

router.get("/projectList", (req, res) => {
    db.query("SELECT * from project", (err, results) => {
        res.send(results)
    })
})

router.get("/projectById/:id", (req, res) => {
    const id = req.params.id
    db.query("SELECT project.projectTitle, project.projectInfo, project.projectBrief from project WHERE projectId = ?", id, (err, results) => {
        res.send(results)
    })
    console.log(id)
})

module.exports = router;