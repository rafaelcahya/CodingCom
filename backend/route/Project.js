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
    const type = req.body.type
    const language = req.body.language
    const createAt = req.body.createAt
    let updateAt = ""
    let isDeleted = "NO"
    let format =/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/

    if (title.length <= 0) {
        res.send({ message: "Project Title can not be empty" })
    } else if (info.length <= 0) {
        res.send({ message: "Project Info can not be empty" })
    } else if (brief.length <= 0) {
        res.send({ message: "Project Brief can not be empty" })
    } else if (type.length <= 0) {
        res.send({ message: "Project Type can not be empty" })
    } else if(language.length<=0){
        res.send({message:"Programming language must be filled"})
    } else if(language.match(format)!=null){
        res.send({message:"Programming Language must use space"})
    } else if (!req.files) {
        res.send({ message: "Image can not be empty" })
    } else {
        const file = req.files.fileUpload
        const filename = file.name
        const projectFile = req.files.projectFile
        const projectFileName = projectFile.name
        db.query("INSERT INTO project (projectTitle, type_id, projectInfo, image, projectBrief, projectFile, programmingLanguage, projectCreateAt, projectUpdateAt, isDeleted) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?);", [title, type, info, filename, brief, projectFileName, language, createAt, updateAt, isDeleted], (err, results) => {
            console.log(err)
            // file.mv('../frontend/src/asset/fileUpload/' + file.name)
            file.mv('../frontend/src/asset/upload/' + file.name)
            projectFile.mv('../frontend/src/asset/upload/' + projectFile.name)
            res.send("Project Submited!!")
        })
    }
})

router.get("/projectList", (req, res) => {
    let isDeleted = "NO"
    db.query("SELECT * from project WHERE isDeleted = ?", isDeleted, (err, results) => {
        res.send(results)
    })
})

router.get("/projectListByTypeId/:id", (req, res) => {
    const id = req.params.id
    let isDeleted = "NO"
    db.query("SELECT * from project WHERE project.type_id = ? AND project.isDeleted = ?", [id, isDeleted], (err, results) => {
        res.send(results)
    })
})

router.get("/projectTypeList", (req, res) => {
    let isDeleted = "NO"
    db.query("SELECT * from typeproject WHERE isDeleted = ?", isDeleted, (err, results) => {
        res.send(results)
    })
})

router.get("/projectTypeListById/:id", (req, res) => {
    const id = req.params.id
    db.query("SELECT * from typeproject WHERE typeId = ?", id, (err, results) => {
        res.send(results)
    })
})

router.get("/projectById/:id", (req, res) => {
    const id = req.params.id
    db.query("SELECT project.projectTitle, project.projectInfo, project.projectBrief from project WHERE projectId = ?", id, (err, results) => {
        res.send(results)
    })
})

router.get("/GetprojectById/:id", (req, res) => {
    const id = req.params.id
    db.query("SELECT * from project WHERE projectId = ?", id, (err, results) => {
        res.send(results)
    })
})

router.post("/editProject", (req, res) => {
    const id = req.body.id
    let title = req.body.title
    let info = req.body.info
    let brief = req.body.brief
    let type = req.body.type
    let language = req.body.language
    let updateAt = req.body.updateAt
    const file = req.files.fileUpload
    const filename = file.name
    const projectFile = req.files.projectFile
    const projectFileName = projectFile.name

    if(language.match(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/) != null){
        res.send({message:"Programming Language must use space"})
    }else{
    db.query("SELECT * From project WHERE projectId = ?", id, (err, results) => {
        if (err) {
            console.log(err)
        }
        if (results.length > 0) {
            if (title.length <= 0) {
                title = results[0].projectTitle

            } if (info.length <= 0) {
                info = results[0].projectInfo

            } if (brief.length <= 0) {
                brief = results[0].projectBrief

            } if (type.length <= 0) {
                type = results[0].type_id

            } if(language.length <= 0){
                language = results[0].language
                
            } if (!req.files) {
                db.query("UPDATE project SET projectTitle = ?, projectInfo = ?, projectBrief = ?, projectUpdateAt=?  WHERE projectId=?;", [title, info, brief, updateAt, id], (err, results) => {
                    console.log(err)
                    res.send({message:"Project Updated"})
                })
            }else {
                db.query("UPDATE project SET projectTitle = ?, image = ?, projectInfo = ?, projectBrief = ?, projectFile = ?, projectUpdateAt=?  WHERE projectid=?;", [title, filename, info, brief, projectFileName, updateAt, id], (err, results) => {
                    console.log(err)
                    // file.mv('../frontend/src/asset/fileUpload/' + file.name)
                    file.mv('../frontend/src/asset/upload/' + file.name)
                    projectFile.mv('../frontend/src/asset/upload/' + projectFile.name)
                    res.send({message:"Project Updated!!"})
                })
            }
        }
    })
}
    // db.query("UPDATE project SET projectTitle = ?, projectInfo = ?, projectBrief = ?, projectUpdateAt=?  WHERE id=?;", [title, info, brief, updateAt, id], (err, results) => {
    //     console.log(err)
    //     res.send(results)
    // })
})

router.put("/deleteProject", (req, res) => {
    const id = req.body.id
    const updateAt = req.body.updateAt
    let isDeleted = "YES"

    db.query("UPDATE project SET isDeleted = ?, projectUpdateAt = ? WHERE projectId = ?;", [isDeleted, updateAt, id], (err, results) => {
        console.log(err)
        res.send(results)
    })
})

module.exports = router;