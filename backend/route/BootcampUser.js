const { constants } = require('buffer')
const { Router } = require('express')
const express = require('express')
const { type } = require('os')
const router = express.Router()

const db = require('../config/db')
const nodemailer = require('nodemailer')

router.post("/bootcampUserRegis", (req, res) => {
    const name = req.body.name
    const address = req.body.address
    const city = req.body.city
    const postalCode = req.body.postalCode
    const emergency = req.body.emergency
    const cemergency = req.body.cemergency
    const education = req.body.education
    const program = req.body.program
    const batch = req.body.batch
    const motivation = req.body.motivation
    const busy = req.body.busy
    const createAt = req.body.createAt
    let user_id = 0

    if (address <= 0) {
        res.send({ message: "Please add your address" })
    } else if(city <=0) {
        res.send({ message: "Please add your city" })
    }else if(postalCode <= 0 ){
        res.send({ message: "Please add your postal code" })
    }else if(emergency <= 0){
        res.send({ message: "Please add your emergency number" })
    }else if(cemergency <= 0){
        res.send({ message: "Please add your confirm emergency number" })
    }else if(cemergency != emergency){
        res.send({ message: "confirm emergency number must be same as emergency number" })
    }else if(education <= 0){
        res.send({ message: "Please add your last education" })
    }else if(program <=0 ){
        res.send({ message: "Please add your how you know this program" })
    }else if(batch <= 0){
        res.send({ message: "Please add your batch" })
    }else if(motivation <=0){
        res.send({ message: "Please add your motivation" })
    }else if(busy <=0){
        res.send({ message: "Please add what you are busy with" })
    }else{
        db.query("SELECT * From user WHERE name = ?", name, (err, results) => {
            if (err) {
                console.log(err)
            }
            if (results.length > 0) {
                user_id = results[0].id
                let fullname = results[0].fullname
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
                        db.query("INSERT INTO bootcampuser (address, city, postalCode, emergencynumber, education, program, batch, motivation, busy, createAt, user_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);", [address, city, postalCode, emergency, education, program, batch, motivation, busy, createAt, user_id], (err, results) => {
                            console.log(err)
                            res.send(results)
                        })
                    } else {
                        res.send({ message: "Data already exist" })
                    }
                })
            }
        })
    }

})

module.exports = router;