const express = require('express')
const { type } = require('os')
const router = express.Router()

const db = require('../config/db')

const nodemailer = require('nodemailer')
const fs = require('fs')
const handlebars = require('handlebars')

router.post("/addReceipt", (req, res) => {
    const nominal = req.body.nominal
    const jumlah = req.body.jumlah
    const pembayaran = req.body.pembayaran
    const createAt = req.body.createAt
    const mentor = req.body.mentor
    let isDeleted = "NO"
    
    if(mentor.length<=0){
        res.send({message:"Choose mentor must be selected"})
    }else if(jumlah.length<=0){
        res.send({message:"Ammount must be filled in"})
    }else if (jumlah.match(/[0-9]/) != null) {
        res.send({ message: "Ammount must not be number" })
    }else if(pembayaran.length<=0){
        res.send({message:"Payment for must be filled in"})
    }else if(pembayaran.length >=50){
        res.send({message:"Payment for must be less than 150 character"})
    }else if(nominal.length<=0){
        res.send({message:"Nominal must be filled in"})
    }else{
        var	format = nominal.toString().split('').reverse().join(''),
	    rupiah 	= format.match(/\d{1,3}/g);
	    rupiah	= rupiah.join('.').split('').reverse().join('');
        db.query("SELECT * From user WHERE id = ?", mentor, (err, results) => {
            if (err) {
                console.log(err)
            }
            if (results.length > 0) {
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
                var email = results[0].email
                if(email.match(results[0].email)!=null){
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
                                subject: 'Receipt Payment',
                                html: "<p>Thank you for being a mentor at Coding com </p>" + '</br>' + "Your payment has been send by admin, you can check it at codingcom website"
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
                db.query("INSERT INTO receipt (pembayaran, nominal, jumlah, mentor_id, createAt, isDeleted) VALUES (?, ?, ?, ?, ?, ?);", [pembayaran, rupiah, jumlah, mentor, createAt, isDeleted], (err, results) => {
                    console.log(err)
                    res.send({message: "Receipt have been successfully send to mentor"})
                })
            } 
        })
    }
})

router.get("/receiptListMentor/:name",(req, res)=>{
    const name = req.params.name
    let isDeleted = "NO"
    db.query("SELECT receipt.receiptId, receipt.pembayaran, receipt.nominal, receipt.jumlah, receipt.createAt, user.fullname from receipt,user WHERE receipt.mentor_id = user.id AND receipt.isDeleted = ? AND user.name = ?",[isDeleted,name],(err, results)=>{
        res.send(results)
    })
})

router.get("/receiptDetail/:id",(req, res)=>{
    const id = req.params.id
    let isDeleted = "NO"
    db.query("SELECT receipt.receiptId, receipt.pembayaran, receipt.nominal, receipt.jumlah, receipt.createAt, user.fullname from receipt,user WHERE receipt.mentor_id = user.id AND receipt.isDeleted = ? AND receipt.receiptId = ?",[isDeleted,id],(err, results)=>{
        res.send(results)
    })
})

router.get("/receiptList",(req, res)=>{
    let isDeleted = "NO"
    db.query("SELECT receipt.receiptId, receipt.pembayaran, receipt.nominal, receipt.jumlah, receipt.createAt, user.fullname from receipt,user WHERE receipt.mentor_id = user.id AND receipt.isDeleted = ?",isDeleted,(err, results)=>{
        res.send(results)
    })
})

module.exports = router;