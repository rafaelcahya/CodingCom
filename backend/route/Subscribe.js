const express = require('express')
const { type } = require('os')
const router = express.Router()

const db = require('../config/db')

const nodemailer = require('nodemailer')
const fs = require('fs')
const handlebars = require('handlebars')

router.post("/subscribe", (req, res) => {
    const name = req.body.name
    const createAt = req.body.createAt
    let des = "Subscribed"
    let isDeleted = "NO"
    var user_id = 0
    db.query("SELECT * From user WHERE name = ?", name, (err, results) => {
        if (err) {
            console.log(err)
        }
        if (results.length > 0) {
            user_id = results[0].id
            var email = results[0].email
            db.query("SELECT * From subscribe WHERE user_id = ?", user_id, (err, results) => {
                if (err) {
                    console.log(err)
                }
                if (results.length > 0) {
                        res.send({message:"You are already subscribe"})
                }else {
                    const readHTMLFile = function(path, callback) {
                        fs.readFile(path, { encoding: "utf-8" }, function(err, html) {
                            if (err) {
                                throw err;
                            callback(err);
                            } else {
                                callback(null, html);
                            }
                        });
                    };
                    if(email.match(email)!=null){
                        var transporter = nodemailer.createTransport({
                            host: 'smtp.gmail.com',
                            auth: {
                                type: 'login',
                                user: 'codingpaymentcom@gmail.com',
                                pass: 'Codingcom01'
                            }
                        })
                        readHTMLFile(
                            __dirname + "/views/forgotpass.html",
                            function(err, html){
                                var template = handlebars.compile(html);
        
                                var htmlToSend = template();
                                var mailOption = {
                                    from: 'codingpaymentcom@gmail.com',
                                    to: email,
                                    subject: 'Subscribe',
                                    html: "<p>Thank you for your subscribe </p>" + '</br>' + "You will receive more information in the future"
                                }
                                transporter.sendMail(mailOption, function (err, info) {
                                    if (err) {
                                        console.log(err)
                                    } else {
                                        console.log('Email sent:' + info.response)
                                    }
                                })
                            }
                        )
                    }
                    db.query("INSERT INTO subscribe (user_id, des, subscribeCreateAt, isDeleted) VALUES (?, ?, ?, ?);", [user_id, des, createAt, isDeleted], (err, results) => {
                        console.log(err)
                        res.send({message:"Thank you for subscribe"})
                    })
                } 
            })
        } 
    })
})

router.get("/subscribeList",(req, res)=>{
    let isDeleted = "NO"
    db.query("SELECT * from subscribe WHERE isDeleted = ?",isDeleted,(err, results)=>{
        console.log(err)
        res.send(results)
    })
})

module.exports = router;