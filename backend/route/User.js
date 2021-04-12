const express = require('express')
const { type } = require('os')
const router = express.Router()

const db = require('../config/db')

router.post("/register", (req, res) => {
    const fullname = req.body.fullname
    const name = req.body.name
    const email = req.body.email
    const password = req.body.password
    const confirmpassword = req.body.confirmpassword
    
    if(fullname.length<=0){
        res.send({message:"Fullname can not be empty"})
    }else if(name.length <=0){
        res.send({message:"Username can not be empty"})
    }else if(name.length >=32){
        res.send({message:"Username must be less than 32 character"})
    }else if(name.match(/[ ]/)!=null){
        res.send({message:"Username must not has space"})
    }else if(email.length<=0){
        res.send({message:"Email can not be empty"})
    }else if(email.match(/[@]/)==null){
        res.send({message:"Email is invalid"})
    }else if(email.match(/[.]/)==null){
        res.send({message:"Email is invalid"})
    }else if(password <=0){
        res.send({message:"Password can not be empty"})
    }else if(password.length <= 8){
        res.send({message:"Password must be at least 8 character"})
    }else if(password.length >= 20){
        res.send({message:"Password must be less than 20 character"})
    }else if(password.match(/[A-Z]/) == null){
        res.send({message:"Password must has 1 uppercase"})
    }else if(password.match(/[a-z]/) == null){
        res.send({message:"Password must has 1 lowecase"})
    }else if(password.match(/[0-9]/) == null){
        res.send({message:"Password must has 1 number"})
    }else if(confirmpassword != password){
        res.send({message:"Confirm password must be same as password"})
    }else {
        
        db.query("INSERT INTO user (fullname, name, email, password, confirmpassword) VALUES (?, ?, ?, MD5(?), MD5(?));", [fullname, name, email, password, confirmpassword], (err, results) => {
            console.log(err)
            res.send(results)
            
        })
    }
})

router.post("/login", (req, res) => {

    const name = req.body.name
    const password = req.body.password
    var crypto = require('crypto')
    var hash = crypto.createHash('md5').update(password).digest('hex')

    db.query("SELECT * From user WHERE name = ?", name ,(err, results) => {
        if (err) {
            console.log(err)
        }
        if (results.length > 0) {
            if (hash.match(results[0].password)!=null) {
                res.json({ loggedIn: true, name: name })
                
            }else if(name.length<=0){
                res.send({message:"You must fill username"})
            }else if(password.length<=0){
                res.send({message:"You must fill password"})
            }
            // else if (password.length <= 8) {
            //     res.json({ loggedIn: true, message: "Password at least has 8 character" })
            // } else if (password.length >= 20) {
            //     res.json({ loggedIn: true, message: "Password must be less than 20 character" })
            // } else if (password.match(/[A-Z]/) == null) {
            //     res.json({ loggedIn: true, message: "Password at least 1 uppercase" })
            // } else if (password.match(/[a-z]/) == null) {
            //     res.json({ loggedIn: true, message: "Password at least 1 lowercase" })
            // } else if (password.match(/[0-9]/) == null) {
            //     res.json({ loggedIn: true, message: "Password at least 1 number" })
            // }
            else {
                res.json({ loggedIn: false, message: "Wrong Username / Password" })
                
            }
        } else {
            res.json({ loggedIn: false, message: "Wrong Username / Password" })
            
        }
    })
})


module.exports = router;