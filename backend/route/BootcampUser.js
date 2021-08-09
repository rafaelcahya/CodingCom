const { constants } = require('buffer')
const { Router } = require('express')
const express = require('express')
const { type } = require('os')
const router = express.Router()

const db = require('../config/db')
const nodemailer = require('nodemailer')

router.post("/bootcampUserRegis", (req, res) => {
    const name = req.body.name
    const program = req.body.program
    const batch = req.body.batch
    const motivation = req.body.motivation
    const busy = req.body.busy
    const createAt = req.body.createAt
    let fullname = req.body.fullname
    let gender = req.body.gender
    let BoD = req.body.BoD
    let phonenumber = req.body.phonenumber
    let cphonenumber = req.body.cphonenumber
    let emergencynumber = req.body.emergencynumber
    let cemergencynumber = req.body.cemergencynumber
    let address = req.body.address
    let city = req.body.city
    let postalCode = req.body.postalCode
    let education = req.body.education
    let user_id = 0
    let status = "Pending"
    let isDeleted = "NO"

    if(fullname.length <=0 && gender.length<=0 && BoD == "0000-00-00" && phonenumber.length<=0 && cphonenumber.length<=0 && emergencynumber <=0 && cemergencynumber.length<=0 && address.length<=0 && city.length<=0 && postalCode <=0 && education.length<=0 && program.length<=0 && batch <=0 && motivation.length<=0 && busy.length<=0){
        res.send({message:"Please fill out all forms"})
    }else if(fullname.length<=0){
        res.send({message:"Your fullname is not filled in"})
    }else if(gender.length <= 0){
        res.send({message:"Gender not selected"})
    }else if(BoD.length<=0){
        res.send({message:"Your birth date is not filled"})
    }else if(phonenumber.length<=0){
        res.send({message:"Your phone number is not filled in"})
    }else if(phonenumber.length>13){
        res.send({message:"Phone number must be less than 13 digit"})
    }else if(cphonenumber.length<=0){
        res.send({message:"Your confirm phone number is not filled in"})
    }else if(cphonenumber!=phonenumber){
        res.send({message:"Confirm Phone number must be same as Phone number"})
    }else if(emergencynumber.length<=0){
        res.send({message:"Your emergency number is not filled in"})
    }else if(emergencynumber.length>13){
        res.send({message:"Emergency number must be less than 13 digit"})
    }else if(cemergencynumber.length<=0){
        res.send({message:"Confirm emergency number must be filled"})
    }else if(cemergencynumber!=emergencynumber){
        res.send({message:"Confirm emergency number must be same as emergency number"})
    }else if(address.length<=0){
        res.send({message:"Your address is not filled in"})
    }else if(city.length<=0){
        res.send({message:"Your city is not filled"})
    }else if(postalCode<=0 || postalCode.length<=0){
        res.send({message:"Your postal code is not filled"})
    }else if(postalCode.length < 5 || postalCode.length > 5){
        res.send({message:"Postal Code invalid"})
    }else if(education.length<=0){
        res.send({message:"Last Education not selected"})
    }else if(program.length <=0 ){
        res.send({ message: "Please add your how you know this program" })
    }else if(batch.length <= 0){
        res.send({ message: "Batch not selected" })
    }else if(motivation.length <=0){
        res.send({ message: "Your motivation is not filled in" })
    }else if(busy.length <=0){
        res.send({ message: "Your busy is not filled in" })
    }else{
        db.query("SELECT * From user WHERE name = ?", name, (err, results) => {
            if (err) {
                console.log(err)
            }
            if (results.length > 0) {
                user_id = results[0].id
                let email = results[0].email
                let textbody = 'Welcome, ' + fullname + 'Thank you for registering for this bootcamp program, we hope you have a nice day and nice journey to the peak'
                db.query("SELECT * From bootcampuser WHERE user_id = ?", user_id, (err, results) => {
                    if (err) {
                        console.log(err)
                    }
                    if (!results.length) {
                        var transporter = nodemailer.createTransport({
                            host: 'smtp.gmail.com',
                            auth: {
                                type: 'login',
                                user: 'codingpaymentcom@gmail.com',
                                pass: 'Codingcom01'
                            }
                        })
                        var mailOption = {
                            from: 'codingpaymentcom@gmail.com',
                            to: email,
                            subject: 'Register Successfully',
                            text: textbody
                        }
                        transporter.sendMail(mailOption, function (err, info) {
                            if (err) {
                                console.log(err)
                            } else {
                                console.log('Email sent:' + info.response)
                            }
                        })
                        db.query("INSERT INTO bootcampuser (program, batch, motivation, busy, status, bootcampCreateAt, user_id, isDeleted) VALUES (?, ?, ?, ?, ?, ?, ?, ?);", [program, batch, motivation, busy, status, createAt, user_id, isDeleted], (err, results) => {
                            console.log(err)
                            res.send({message:"Register Successfully"})
                        })
                    } else {
                        res.send({ message: "Data already exist" })
                    }
                })
            }
        })
    }

})

router.get("/BootcampList", (req, res) => {
    let isDeleted = "NO"
    db.query("SELECT bootcampuser.id, bootcampuser.program, bootcampuser.motivation, bootcampuser.busy, bootcampuser.status, batch.batch, batch.startDate, batch.endDate, user.fullname, user.gender, user.BoD, user.phoneNumber, user.emergencyNumber, user.address, user.city, user.postalCode, user.education, user.email from bootcampuser,user,batch WHERE bootcampuser.user_id = user.id AND bootcampuser.batch = batch.batchId AND bootcampuser.isDeleted = ? ORDER BY bootcampCreateAt",isDeleted,(err, results) => {
        res.send(results)
        console.log(results)
    })
})

router.put("/deleteBootcamp", (req, res) => {
    const id = req.body.id
    const updateAt = req.body.updateAt
    let isDeleted = "YES"

    db.query("UPDATE bootcampuser SET isDeleted = ?, bootcampUpdateAt = ? WHERE id = ?;", [isDeleted, updateAt, id], (err, results) => {
        console.log(err)
        res.send(results)
    })
})

module.exports = router;