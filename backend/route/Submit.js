const { constants } = require('buffer')
const { Router } = require('express')
const express = require('express')
const { type } = require('os')
const router = express.Router()

const db = require('../config/db')

router.post("/submit", (req, res) => {
    const name = req.body.name
    const id = req.body.id
    const url = req.body.url
    const description = req.body.description
    const live_site_url = req.body.live_site_url
    const createAt = req.body.createAt
    let namefile = ""
    let score = 0
    let user_id = 0
    let isDeleted = "NO"
    
    if (url.length <= 0) {
        res.send({ message: "Please add the repository URL" })
    } else {
        db.query("SELECT * From user WHERE name = ?", name, (err, results) => {
            if (err) {
                console.log(err)
            }

            if (results.length > 0) {
                user_id = results[0].id
                if (!req.files) {
                    db.query("INSERT INTO projectsub (project_id, url, fileName, live_site_url, description, score, user_id, projectsubCreateAt, isDeleted) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?);", [id, url, namefile, live_site_url, description, score, user_id, createAt, isDeleted], (err, results) => {
                        console.log(err)
                        res.send(results)
                    })
                } else {
                    const file = req.files.fileUpload
                    const filename = file.name
                        db.query("INSERT INTO projectsub (project_id, url, fileName, live_site_url, description, score, user_id, projectsubCreateAt, isDeleted) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?);", [id, url, filename, live_site_url, description, score, user_id, createAt, isDeleted], (err, results) => {
                            console.log(err)
                            res.send(results)
                            // file.mv('../frontend/src/asset/fileUpload/' + file.name)
                            file.mv('../frontend/src/asset/upload/' + file.name)
                        })
                }
                // db.query("INSERT INTO submit (title, url, fileName, live_site_url, description, score, user_id, createAt) VALUES (?, ?, ?, ?, ?, ?, ?, ?);", [title, url, live_site_url, description, score, user_id, createAt], (err, results) => {
                //     console.log(err)
                //     res.send(results)
                // })
                // console.log(user_id)
            }
        })
    }
})

router.post("/score", (req, res) => {
    const id = req.body.urlid
    const score = req.body.score
    const updateAt = req.body.updateAt
    if(score <= 0){
        res.send({message:"Score can not be empty"})
    }else {
        db.query("UPDATE projectsub SET score = ?, projectsubCreateAt = ? WHERE id = ?;", [score,updateAt,id], (err, results) => {
            console.log(err)
            res.send(results)
        }) 
    }
})

router.get("/submitList", (req, res) => {
    db.query("SELECT projectsub.id, projectsub.url, projectsub.fileName, projectsub.live_site_url, projectsub.description, projectsub.projectsubCreateAt, projectsub.projectsubUpdateAt, project.projectTitle, project.type_id, typeproject.type, user.name from projectsub,project,typeproject,user WHERE projectsub.user_id = user.id AND projectsub.project_id = project.projectId AND project.type_id = typeproject.typeId",(err, results) => {
        res.send(results)
        console.log(results)
    })
})

router.get("/submitListById/:id/:name", (req, res) => {
    const id = req.params.id
    const name = req.params.name
    let user_id=0

    db.query("SELECT * From user WHERE name = ?", name, (err, results) => {
        if (err) {
            console.log(err)
        }
        if (results.length > 0) {
            user_id = results[0].id
            db.query("SELECT * from projectsub WHERE project_id = ? AND user_id = ?",[id, user_id],(err, results) => {
                res.send(results)
                console.log(results)
            })
        }
    })
})

module.exports = router;