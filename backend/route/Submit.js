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
    let score = 0
    let user_id = 0
    let isDeleted = "NO"
    let times = 1
    
    if(url.length <=0 && description.length<=0 && live_site_url.length<=0 && !req.files){
        res.send({message:"All form have not been filled"})
    }else if (description.length <= 0) {
        res.send({ message: "Please add the description" })
    } else if(!req.files){
        res.send({message:"File can not be empty"})
    }else{
        const file = req.files.fileUpload
        const filename = file.name
        db.query("SELECT * From user WHERE name = ?", name, (err, results) => {
            if (err) {
                console.log(err)
            }

            if (results.length > 0) {
                user_id = results[0].id
                db.query("SELECT * from projectsub WHERE user_id = ? AND project_id = ?",[user_id, id],(err,results)=>{
                    if(err){
                        console.log(err)
                    }
                    if(!results.length){
                        db.query("INSERT INTO projectsub (project_id, url, fileName, live_site_url, description, score, user_id, timesUpload, projectsubCreateAt, isDeleted) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?);", [id, url, filename, live_site_url, description, score, user_id, times, createAt, isDeleted], (err, results) => {
                            console.log(err)
                            res.send({message:"Project has been successfully uploaded"})
                            // file.mv('../frontend/src/asset/fileUpload/' + file.name)
                            file.mv('../frontend/src/asset/upload/' + file.name)
                        })
                    }else{
                        times = results[0].timesUpload + 1
                        db.query("UPDATE projectsub SET url = ?, fileName = ?, live_site_url = ?, description = ?, timesUpload = ?, projectsubUpdateAt = ? WHERE user_id = ? AND project_id = ?;", [url, filename, live_site_url, description, times, createAt, user_id, id], (err, results) => {
                            console.log(err)
                            res.send({message:"Project has been successfully uploaded"})
                            file.mv('../frontend/src/asset/upload/' + file.name)
                        })
                    }
                })               
            }
        })
    }
})

router.post("/score", (req, res) => {
    const id = req.body.urlid
    const score = req.body.score
    const revisi = req.body.revisi
    const updateAt = req.body.updateAt
    if(score <= 0){
        res.send({message:"Score can not be empty"})
    }else {
        db.query("UPDATE projectsub SET score = ?, revisi = ?, projectsubUpdateAt = ? WHERE id = ?;", [score,revisi,updateAt,id], (err, results) => {
            console.log(err)
            res.send(results)
            res.send({message:"Score successfully submited!!"})
        })
    }
})

router.get("/submitList", (req, res) => {
    let isDeleted = "NO"
    db.query("SELECT projectsub.id, projectsub.url, projectsub.fileName, projectsub.live_site_url, projectsub.description, projectsub.timesUpload, projectsub.projectsubCreateAt, projectsub.projectsubUpdateAt, project.projectTitle, project.type_id, typeproject.type, user.name from projectsub,project,typeproject,user WHERE projectsub.user_id = user.id AND projectsub.project_id = project.projectId AND project.type_id = typeproject.typeId AND projectsub.isDeleted = ?",isDeleted,(err, results) => {
        res.send(results)
        console.log(results)
    })
})

router.get("/submitListById/:id/:name", (req, res) => {
    const id = req.params.id
    const name = req.params.name
    let user_id=0
    let isDeleted = "NO"

    db.query("SELECT * From user WHERE name = ?", name, (err, results) => {
        if (err) {
            console.log(err)
        }
        if (results.length > 0) {
            user_id = results[0].id
            db.query("SELECT * from projectsub WHERE project_id = ? AND user_id = ? AND isDeleted = ?",[id, user_id, isDeleted],(err, results) => {
                res.send(results)
                console.log(results)
            })
        }
    })
})

router.put("/deleteProjectSub", (req, res) => {
    const id = req.body.id
    const updateAt = req.body.updateAt
    let isDeleted = "YES"

    db.query("UPDATE projectsub SET isDeleted = ?, projectsubUpdateAt = ? WHERE id = ?;", [isDeleted, updateAt, id], (err, results) => {
        console.log(err)
        res.send(results)
    })
})

router.get("/submitListUser/:name", (req, res) => {
    const name = req.params.name
    let user_id=0
    let isDeleted = "NO"

    db.query("SELECT * From user WHERE name = ?", name, (err, results) => {
        if (err) {
            console.log(err)
        }
        if (results.length > 0) {
            user_id = results[0].id
            db.query("SELECT projectsub.description, projectsub.project_id, projectsub.score, projectsub.revisi, projectsub.timesUpload, projectsubCreateAt, projectsubUpdateAt, projectsub.url, projectsub.fileName, projectsub.live_site_url, project.projectTitle, typeproject.type from projectsub,project,typeproject WHERE projectsub.project_id=project.projectId AND project.type_id = typeproject.typeId AND projectsub.user_id = ? AND projectsub.isDeleted = ?",[user_id, isDeleted],(err, results) => {
                res.send(results)
                console.log(results)
            })
        }
    })
})

router.get("/submitListCount/:name", (req, res) => {
    const name = req.params.name
    let user_id=0
    let isDeleted = "NO"

    db.query("SELECT * From user WHERE name = ?", name, (err, results) => {
        if (err) {
            console.log(err)
        }
        if (results.length > 0) {
            user_id = results[0].id
            db.query("SELECT COUNT(id) AS sum from projectsub WHERE user_id = ? AND isDeleted = ?",[user_id, isDeleted],(err, results) => {
                res.send(results)
                console.log(results)
            })
        }
    })
})

router.get("/submitListCountCerti/:name", (req, res) => {
    const name = req.params.name
    let user_id=0
    let isDeleted = "NO"
    let type = 2

    db.query("SELECT * From user WHERE name = ?", name, (err, results) => {
        if (err) {
            console.log(err)
        }
        if (results.length > 0) {
            user_id = results[0].id
            db.query("SELECT COUNT(id) AS certi from projectsub,project WHERE projectsub.project_id = project.projectId AND projectsub.user_id = ? AND projectsub.isDeleted = ? AND project.type_id = ?",[user_id, isDeleted, type],(err, results) => {
                res.send(results)
                console.log(results)
            })
        }
    })
})

router.get("/submitListCountChel/:name", (req, res) => {
    const name = req.params.name
    let user_id=0
    let isDeleted = "NO"
    let type = 1

    db.query("SELECT * From user WHERE name = ?", name, (err, results) => {
        if (err) {
            console.log(err)
        }
        if (results.length > 0) {
            user_id = results[0].id
            db.query("SELECT COUNT(id) AS chel from projectsub,project WHERE projectsub.project_id = project.projectId AND projectsub.user_id = ? AND projectsub.isDeleted = ? AND project.type_id = ?",[user_id, isDeleted, type],(err, results) => {
                res.send(results)
                console.log(results)
            })
        }
    })
})

module.exports = router;