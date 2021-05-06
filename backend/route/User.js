const express = require('express')
const { type } = require('os')
const router = express.Router()

const db = require('../config/db')

const nodemailer = require('nodemailer')

router.post("/register", (req, res) => {
    const fullname = req.body.fullname
    const name = req.body.name
    const email = req.body.email
    const password = req.body.password
    const confirmpassword = req.body.confirmpassword
    const createAt = req.body.createAt
    let paket_id = 4
    let updateAt = " "
    let status = "NONACTIVE"
    let role = 3
    let isDeleted = "NO"
    let textbody = 'Welcome, ' + fullname + "<br/>" + 'Thank you for registering your account, we hope you hava nice day and nice journey to the peak'

    if (fullname.length <= 0) {
        res.send({ message: "Please add your fullname" })
    } else if (name.length <= 0) {
        res.send({ message: "Please add your username" })
    } else if (name.length >= 32) {
        res.send({ message: "Username must be less than 20 characters" })
    } else if (name.match(/[ ]/) != null) {
        res.send({ message: "Username cannot contain spaces" })
    } else if (email.length <= 0) {
        res.send({ message: "Please add your Email" })
    } else if (email.match(/[@]/) == null) {
        res.send({ message: "Email is invalid" })
    } else if (email.match(/[.]/) == null) {
        res.send({ message: "Email is invalid" })
    } else if (password <= 0) {
        res.send({ message: "Please add your password" })
    } else if (password.length < 8) {
        res.send({ message: "Password must be at least 8 characters" })
    } else if (password.length >= 20) {
        res.send({ message: "Password must be less than 20 characters" })
    } else if (password.match(/[A-Z]/) == null) {
        res.send({ message: "Password must contain at least 1 uppercase letter" })
    } else if (password.match(/[a-z]/) == null) {
        res.send({ message: "Password must contain at least 1 lowercase letter" })
    } else if (password.match(/[0-9]/) == null) {
        res.send({ message: "Password must contain at least 1 number" })
    } else if (confirmpassword <= 0) {
        res.send({ message: "Please add your confirm password" })
    } else if (confirmpassword != password) {
        res.send({ message: "Confirm password must be same as password" })
    } else {
        db.query("SELECT * From user WHERE name = ?", name, (err, results) => {
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
                db.query("INSERT INTO user (fullname, name, email, password, confirmpassword, status, roleId, paket_id, createAt, updateAt, isDeleted) VALUES (?, ?, ?, MD5(?), MD5(?), ?, ?, ?, ?, ?, ?);", [fullname, name, email, password, confirmpassword, status, role, paket_id, createAt, updateAt, isDeleted], (err, results) => {
                    console.log(err)
                    res.send(results)
                })
            } else {
                res.send({ message: "Username already exist" })
            }
        })
    }
})

router.post("/login", (req, res) => {

    const name = req.body.name
    const password = req.body.password
    var crypto = require('crypto')
    var hash = crypto.createHash('md5').update(password).digest('hex')

    db.query("SELECT * From user WHERE name = ?", name, (err, results) => {
        if (err) {
            console.log(err)
        }
        if (results.length > 0) {
            if (hash.match(results[0].password) != null) {
                res.json({ loggedIn: true, name: name })

            } else if (name.length <= 0) {
                res.send({ message: "You must fill username" })
            } else if (password.length <= 0) {
                res.send({ message: "You must fill password" })
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

router.post("/updateStatus", (req, res) => {
    let status = "PENDING"
    const name = req.body.name
    const updateAt = req.body.updateAt

    db.query("UPDATE user SET status = ?, updateAt = ? WHERE name=?;", [status, updateAt, name], (err, results) => {
        console.log(err)
        res.send(results)
    })
})

router.post("/updateStatusClassSession", (req, res) => {
    let status = "PENDING"
    let paket_id = 2
    const name = req.body.name
    const updateAt = req.body.updateAt

    db.query("UPDATE user SET status = ?, updateAt = ?, paket_id = ? WHERE name=?;", [status, updateAt, paket_id, name], (err, results) => {
        console.log(err)
        res.send(results)
    })
})

router.post("/updateStatusClassConsultation", (req, res) => {
    let status = "PENDING"
    let paket_id = 3
    const name = req.body.name
    const updateAt = req.body.updateAt

    db.query("UPDATE user SET status = ?, updateAt = ?, paket_id = ? WHERE name=?;", [status, updateAt, paket_id, name], (err, results) => {
        console.log(err)
        res.send(results)
    })
})

router.put("/updatePayment", (req, res) => {
    const id = req.body.id
    const status = req.body.status
    const updateAt = req.body.updateAt
    let paket_id = 1

    db.query("UPDATE user SET status = ?, updateAt = ?, paket_id = ? WHERE id = ?;", [status, updateAt, paket_id, id], (err, results) => {
        console.log(err)
        res.send(results)
    })
})

router.put("/addeditKuota", (req, res) => {
    const id = req.body.id
    const status = req.body.status
    const createAt = req.body.createAt
    const updateAt = req.body.updateAt
    let update = " "
    let kuotaConsultation = 0
    let kuotaSession = 0
    let paket = 0
    if (status == "ACTIVED") {
        kuotaConsultation = 7
        kuotaSession = 5
        db.query("SELECT * From userkuota WHERE user_id = ?", id, (err, results) => {
            if (err) {
                console.log(err)
            }
            if (results.length > 0) {
                kuotaConsultation = results[0].classConsultation + 5
                kuotaSession = results[0].classSession + 5
                // db.query("SELECT * From user WHERE id = ?", id, (err, results) => {
                //     if (err) {
                //         console.log(err)
                //     }
                //     if (results.length > 0) {
                //        paket = results[0].paket_id
                //        if(paket==2){
                //         db.query("UPDATE userkuota SET classSession = ?, updateAt = ? WHERE user_id = ?;", [kuotaSession, updateAt, id], (err, results) => {
                //             console.log(err)
                //             res.send(results)
                //         })
                //        }else if(paket == 3){
                //         db.query("UPDATE userkuota SET classConsultation = ?, updateAt = ? WHERE user_id = ?;", [kuotaConsultation, updateAt, id], (err, results) => {
                //             console.log(err)
                //             res.send(results)
                //         })
                //        }
                //     }
                // })
                    db.query("UPDATE userkuota SET classSession = ?, updateAt = ? WHERE user_id = ?;", [kuotaSession, updateAt, id], (err, results) => {
                        console.log(err)
                        res.send(results)
                    })
                
                    // db.query("UPDATE userkuota SET classConsultation = ?, updateAt = ? WHERE user_id = ?;", [kuotaConsultation, updateAt, id], (err, results) => {
                    //     console.log(err)
                    //     res.send(results)
                    // })
            } else {
                db.query("INSERT INTO userkuota (classConsultation, classSession, user_id, createAt, updateAt) VALUES (?, ?, ?, ?, ?);", [kuotaConsultation, kuotaSession, id, createAt, update], (err, results) => {
                    console.log(err)
                    res.send(results)
                })
            }
        })

    }

})

router.get("/userList", (req, res) => {
    let isDeleted = "NO"
    db.query("SELECT user.id, user.fullname, user.name, user.email, user.status, user.createAt, user.updateAt, user.isDeleted, role.role FROM user,role WHERE user.roleId=role.id AND isDeleted = ?", isDeleted, (err, results) => {
        res.send(results)
        console.log(results)
    })
})

router.get("/userListActive", (req, res) => {
    let status = "ACTIVED"
    let isDeleted = "NO"
    db.query("SELECT user.id, user.fullname, user.name, user.email, user.status, user.createAt, user.updateAt, user.isDeleted, role.role FROM user,role WHERE user.roleId=role.id AND status = ? AND isDeleted = ?", [status, isDeleted], (err, results) => {
        res.send(results)
        console.log(results)
    })
})

router.get("/userListPayment", (req, res) => {
    let status = "PENDING"
    let isDeleted = "NO"
    db.query("SELECT user.id, user.fullname, user.name, user.email, user.status, user.createAt, user.updateAt, user.isDeleted, role.role FROM user,role WHERE user.roleId=role.id AND status = ? AND isDeleted = ?", [status, isDeleted], (err, results) => {
        res.send(results)
    })
})

router.put("/updateUser", (req, res) => {
    const id = req.body.id
    const role = req.body.role
    const updateAt = req.body.updateAt

    db.query("UPDATE user SET roleId = ?, updateAt = ? WHERE id = ?;", [role, updateAt, id], (err, results) => {
        console.log(err)
        res.send(results)
    })
})

router.put("/deleteUser", (req, res) => {
    const id = req.body.id
    const updateAt = req.body.updateAt
    let isDeleted = "YES"

    db.query("UPDATE user SET isDeleted = ?, updateAt = ? WHERE id = ?;", [isDeleted, updateAt, id], (err, results) => {
        console.log(err)
        res.send(results)
    })
})

module.exports = router;