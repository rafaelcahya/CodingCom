const express = require('express')
const { type } = require('os')
const router = express.Router()

const db = require('../config/db')

const nodemailer = require('nodemailer')
const fs = require('fs')
const handlebars = require('handlebars')

router.post("/register", (req, res) => {
    const fullname = req.body.fullname
    const name = req.body.name
    const email = req.body.email
    const password = req.body.password
    const confirmpassword = req.body.confirmpassword
    const createAt = req.body.createAt
    let image = "default-user-image.png"
    let updateAt = ""
    let status = "Not Active"
    let role = 3
    let isDeleted = "NO"
    // let textbody = 'Welcome, ' + fullname + "<br/>" + 'Thank you for registering your account, we hope you hava nice day and nice journey to the peak'
    if(fullname.length<=0 && name.length<=0 && email.length<=0 && password.length<=0 && confirmpassword.length<=0){
        res.send({message:"All forms have not been filled"})
    }else if (fullname.length <= 0) {
        res.send({ message: "Please add your fullname" })
    } else if (name.length <= 0) {
        res.send({ message: "Your username is not filled in" })
    } else if (name.length >= 20) {
        res.send({ message: "Username must be less than 20 characters" })
    } else if (name.match(/[ ]/) != null) {
        res.send({ message: "Username cannot contain spaces" })
    } else if (email.length <= 0) {
        res.send({ message: "Your email is not filled in" })
    } else if (email.match(/[@]/) == null) {
        res.send({ message: "Email is invalid" })
    } else if (email.match(/[.]/) == null) {
        res.send({ message: "Email is invalid" })
    } else if (password <= 0) {
        res.send({ message: "Your password is not filled in" })
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
        db.query("SELECT * From user WHERE name = ? OR email = ?", [name, email], (err, results) => {
            if (err) {
                console.log(err)
            }
            if (!results.length) {
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
                    var transporter = nodemailer.createTransport({
                        host: 'smtp.gmail.com',
                        auth: {
                            type: 'login',
                            user: 'codingpaymentcom@gmail.com',
                            pass: 'Codingcom01'
                        }
                    })
                    readHTMLFile(
                        __dirname + "/views/register.html",
                        function(err, html){
                            var template = handlebars.compile(html);

                            var htmlToSend = template();
                            var mailOption = {
                                from: 'codingpaymentcom@gmail.com',
                                to: email,
                                subject: 'Register Successfully',
                                attachments: [{
                                    filename: 'logo_codingcom.png',
                                    path: __dirname +'/views/logo_codingcom.png',
                                    cid: 'logo@cid'
                                }],
                                html: htmlToSend
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
                db.query("INSERT INTO user (image, fullname, name, email, password, confirmpassword, status, roleId, userCreateAt, userUpdateAt, isDeleted) VALUES (?, ?, ?, ?, MD5(?), MD5(?), ?, ?, ?, ?, ?);", [image, fullname, name, email, password, confirmpassword, status, role, createAt, updateAt, isDeleted], (err, results) => {
                    console.log(err)
                    res.send(results)
                })
            } else {
                res.send({ message: "Username or email already registered" })
            }
        })
    }
})

router.post("/registerMentor", (req, res) => {
    const fullname = req.body.fullname
    const name = req.body.name
    const email = req.body.email
    const createAt = req.body.createAt
    let image = "default-user-image.png"
    let updateAt = ""
    let status = "ACTIVED"
    let role = 2
    let isDeleted = "NO"
    let number = Math.floor(Math.random()*(999-100+1)+100);
    let password = "Mentor"+number
    // let textbody = 'Welcome, ' + fullname + "<br/>" + 'Thank you for registering your account, we hope you hava nice day and nice journey to the peak'

    if (fullname.length <= 0) {
        res.send({ message: "Your fullname is not filled in" })
    } else if (name.length <= 0) {
        res.send({ message: "Your username is not filled in" })
    } else if (name.length >= 20) {
        res.send({ message: "Username must be less than 20 characters" })
    } else if (name.match(/[ ]/) != null) {
        res.send({ message: "Username cannot contain spaces" })
    } else if (email.length <= 0) {
        res.send({ message: "Your email is not filled in" })
    } else if (email.match(/[@]/) == null) {
        res.send({ message: "Email is invalid" })
    } else if (email.match(/[.]/) == null) {
        res.send({ message: "Email is invalid" })
    } else {
        db.query("SELECT * From user WHERE name = ? OR email = ?", [name, email], (err, results) => {
            if (err) {
                console.log(err)
            }
            if (!results.length) {
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
                    var transporter = nodemailer.createTransport({
                        host: 'smtp.gmail.com',
                        auth: {
                            type: 'login',
                            user: 'codingpaymentcom@gmail.com',
                            pass: 'Codingcom01'
                        }
                    })
                    readHTMLFile(
                        __dirname + "/views/register.html",
                        function(err, html){
                            var template = handlebars.compile(html);

                            var htmlToSend = template();
                            var mailOption = {
                                from: 'codingpaymentcom@gmail.com',
                                to: email,
                                subject: 'Register Successfully',
                                attachments: [{
                                    filename: 'logo_codingcom.png',
                                    path: __dirname +'/views/logo_codingcom.png',
                                    cid: 'logo@cid'
                                }],
                                html: "<p><b>Welcome New Mentor,We hope we can help you achive something</b></p>" + '<br/>'+'This is your account'+'<br/>' +'Username: '+ name +'<br/>' + 'Password: ' + password + '<br/>' +"<p><b>NOTE : DON'T LOSE THIS EMAIL AND DON'T GIVE THIS EMAIL TO ANYONE</b></p>"
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
                db.query("INSERT INTO user (image, fullname, name, email, password, confirmpassword, status, roleId, userCreateAt, userUpdateAt, isDeleted) VALUES (?, ?, ?, ?, MD5(?), MD5(?), ?, ?, ?, ?, ?);", [image, fullname, name, email, password, password, status, role, createAt, updateAt, isDeleted], (err, results) => {
                    console.log(err)
                    res.send(results)
                })
            } else {
                res.send({ message: "Username or email already registered" })
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
                res.json({ loggedIn: true, name: name, image:results[0].image, role:results[0].roleId })
            } else if (name.length <= 0) {
                res.send({ message: "Username has not been filled" })
            } else if (password.length <= 0) {
                res.send({ message: "Password has not been filled" })
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

router.post("/reset", (req, res) => {

    const email = req.body.email
    let hash = ""

    if (email.length <= 0) {
        res.send({ message: "Email can not be empty" })
    } else if (email.match(/[@]/) == null) {
        res.send({ message: "Email is invalid" })
    } else if (email.match(/[.]/) == null) {
        res.send({ message: "Email is invalid" })
    } else {
        db.query("SELECT * From user WHERE email = ?", email, (err, results) => {
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
                hash = results[0].password
                if(email.match(results[0].email)!=null){
                    res.send({message:"Link has been send by email"})
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
                                subject: 'Forgot Password',
                                attachments: [{
                                    filename: 'logo_codingcom.png',
                                    path: __dirname +'/views/logo_codingcom.png',
                                    cid: 'logo@cid'
                                }],
                                html: "<p>Click the button below to change your old password.</p>" + 'http://localhost:3000/forgotPassword/' + hash
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
            } else {
                res.send({message: "Your Email Doesn't Exist" })

            }
        })
    }
})

router.post("/resetPassword", (req, res) => {
    const id = req.body.id
    const password = req.body.password
    const confirmpassword = req.body.confirmPassword
    const updateAt = req.body.updateAt
    var crypto = require('crypto')
    var hash = crypto.createHash('md5').update(password).digest('hex')

    if(password.length<=0 && confirmpassword.length<=0){
        res.send({message:"All form must be filled"})
    }else if(password.length<=0){
        res.send({message:"Password can not be empty"})
    }else if(confirmpassword.length<=0){
        res.send({message:"Yor confirm password is not filled in"})
    }else if(confirmpassword != password){
        res.send({message:"Confirm Password must be same as password"})
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
    }else{
        db.query("SELECT * From user WHERE password = ?", id, (err, results) => {
            if (err) {
                console.log(err)
            }
            if (results.length > 0) {
                if (hash.match(results[0].password) != null) {
                    res.send({ message:"Password can not be same as your old password" })
    
                } else {
                    db.query("UPDATE user SET password = MD5(?), confirmpassword = MD5(?), userUpdateAt = ? WHERE password = ?;", [password, confirmpassword, updateAt, id], (err, results) => {
                        res.redirect('/')
                    })
                }
                
            } 
        })
    }
})

// router.post("/updateStatus", (req, res) => {
//     let status = "PENDING"
//     const name = req.body.name
//     const updateAt = req.body.updateAt

//     db.query("UPDATE user SET status = ?, userUpdateAt = ? WHERE name=?;", [status, updateAt, name], (err, results) => {
//         console.log(err)
//         res.send(results)
//     })
// })

// router.post("/updateStatusClassSession", (req, res) => {
//     let status = "PENDING"
//     let paket_id = 2
//     const name = req.body.name
//     const updateAt = req.body.updateAt

//     db.query("UPDATE user SET status = ?, userUpdateAt = ?, paket_id = ? WHERE name=?;", [status, updateAt, paket_id, name], (err, results) => {
//         console.log(err)
//         res.send(results)
//     })
// })

// router.post("/updateStatusClassConsultation", (req, res) => {
//     let status = "PENDING"
//     let paket_id = 3
//     const name = req.body.name
//     const updateAt = req.body.updateAt

//     db.query("UPDATE user SET status = ?, userUpdateAt = ?, paket_id = ? WHERE name=?;", [status, updateAt, paket_id, name], (err, results) => {
//         console.log(err)
//         res.send(results)
//     })
// })

router.put("/updatePaymentStatus", (req, res) => {
    const id = req.body.userId
    const status = req.body.status
    const updateAt = req.body.updateAt
    let statsUser= "Actived"

    if (status == "Approved") {
    db.query("UPDATE user SET status = ?, userUpdateAt = ? WHERE id = ?;", [statsUser, updateAt, id], (err, results) => {
        res.send(results)
    })
}
})

// router.put("/addeditKuota", (req, res) => {
//     const id = req.body.id
//     const paket_id = req.body.paket_id
//     const status = req.body.status
//     const createAt = req.body.createAt
//     const updateAt = req.body.updateAt
//     let update = ""
//     let kuotaConsultation = 0
//     let kuotaSession = 0
//     if (status == "Approved") {
//         kuotaConsultation = 7
//         kuotaSession = 5
//         db.query("SELECT * From userkuota WHERE user_id = ?", id, (err, results) => {
//             if (err) {
//                 console.log(err)
//             }
//             if (results.length > 0) {
//                 kuotaConsultation = results[0].classConsultation + 5
//                 kuotaSession = results[0].classSession + 5
//                 if (paket_id == 2) {
//                     db.query("UPDATE userkuota SET classSession = ?, kuotaUpdateAt = ? WHERE user_id = ?;", [kuotaSession, updateAt, id], (err, results) => {
//                         console.log(err)
//                         res.send(results)
//                     })
//                 } else if (paket_id == 3) {
//                     db.query("UPDATE userkuota SET classConsultation = ?, kuotaUpdateAt = ? WHERE user_id = ?;", [kuotaConsultation, updateAt, id], (err, results) => {
//                         console.log(err)
//                         res.send(results)
//                     })
//                 }

//             } else {
//                 db.query("INSERT INTO userkuota (classConsultation, classSession, user_id, kuotaCreateAt, kuotaUpdateAt) VALUES (?, ?, ?, ?, ?);", [kuotaConsultation, kuotaSession, id, createAt, update], (err, results) => {
//                     console.log(err)
//                     res.send(results)
//                 })
//             }
//         })

//     }

// })

router.get("/userList", (req, res) => {
    let isDeleted = "NO"
    db.query("SELECT user.id, user.fullname, user.name, user.email, user.status, user.userCreateAt, user.userUpdateAt, user.isDeleted, role.role FROM user,role WHERE user.roleId=role.id AND user.isDeleted = ?", isDeleted, (err, results) => {
        res.send(results)
    })
})

router.get("/userListActive", (req, res) => {
    let status = "Actived"
    let isDeleted = "NO"
    db.query("SELECT user.id, user.fullname, user.name, user.email, user.status, user.userCreateAt, user.userUpdateAt, user.isDeleted, role.role FROM user,role WHERE user.roleId=role.id AND status = ? AND user.isDeleted = ?", [status, isDeleted], (err, results) => {
        res.send(results)
    })
})

router.get("/userListPayment", (req, res) => {
    let status = "PENDING"
    let isDeleted = "NO"
    db.query("SELECT user.id, user.fullname, user.name, user.email, user.status, user.userCreateAt, user.userUpdateAt, user.paket_id ,user.isDeleted, role.role FROM user,role WHERE user.roleId=role.id AND status = ? AND user.isDeleted = ?", [status, isDeleted], (err, results) => {
        res.send(results)
    })
})

router.put("/updateUser", (req, res) => {
    const id = req.body.id
    const role = req.body.role
    const updateAt = req.body.updateAt

    db.query("UPDATE user SET roleId = ?, userUpdateAt = ? WHERE id = ?;", [role, updateAt, id], (err, results) => {
        res.send(results)
    })
})

router.put("/deleteUser", (req, res) => {
    const id = req.body.id
    const updateAt = req.body.updateAt
    let isDeleted = "YES"

    db.query("UPDATE user SET isDeleted = ?, userUpdateAt = ? WHERE id = ?;", [isDeleted, updateAt, id], (err, results) => {
        res.send(results)
    })
})

router.get("/userById/:name", (req, res) => {
    const name = req.params.name
    let isDeleted = "NO"
    db.query("SELECT * from user WHERE name = ? AND isDeleted = ?", [name,isDeleted], (err, results) => {
        res.send(results)
    })
})

router.post("/profile", (req, res) => {
    const urlname = req.body.urlname
    let fullname = req.body.fullname
    let name = req.body.username
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
    const updateAt = req.body.updateAt

    if(fullname.length<=0 && name.length<=0 && gender.length<=0 && BoD.length<=0 && phonenumber.length<=0 && cphonenumber.length<=0 && emergencynumber.length<=0 && cemergencynumber.length<=0 && address.length<=0 && city.length<=0 && postalCode <=0 && education.length<=0){
        res.send({message:""})
    }else if(name.length > 20){
        res.send({message:"Username must be less than 20 characters"})
    }else if(name.match(/[ ]/)!=null) {
        res.send({message:"Username cannot contain spaces"})
    }else if(phonenumber > 9999999999999){
        res.send({message:"Phone number must be less than 13 digit "})
    }else if(emergencynumber > 9999999999999){
        res.send({message:"Emergency number must be less than 13 digit "})
    }else if(cphonenumber != phonenumber){
        res.send({message:"Confirm Phone Number must be same as Phone Number"})
    }else if(cemergencynumber != emergencynumber){
        res.send({message:"Confirm Emergency Number must be as Emergency Number"})
    }else if(postalCode > 99999){
        res.send({message:"Postal Code must be less than 5 digit"})
    }else{
        db.query("SELECT * From user WHERE name = ?", urlname, (err, results) => {
            if (err) {
                console.log(err)
            }
            if (results.length > 0) {
                if (fullname.length <= 0) {
                    fullname = results[0].fullname

                } if (name.length <= 0) {
                    name = results[0].name

                } if (gender.length <= 0) {
                    gender = results[0].gender

                } if (BoD.length <= 0) {
                    BoD = results[0].BoD

                } if (phonenumber.length <= 0) {
                    phonenumber = results[0].phoneNumber

                } if (emergencynumber.length <= 0) {
                    emergencynumber = results[0].emergencyNumber

                } if (address.length <= 0) {
                    address = results[0].address

                } if (city.length <= 0) {
                    city = results[0].city

                } if(postalCode.length <= 0){
                    postalCode = results[0].postalCode

                } if(education.length <=0){
                    education = results[0].education

                } if (!req.files) {
                    db.query("UPDATE user SET fullname = ?, name = ?, gender = ?, BoD=?, phoneNumber = ?, emergencyNumber = ?, address = ?, city = ?, postalCode = ?, education = ?, userUpdateAt=?  WHERE name=?;", [fullname, name, gender, BoD, phonenumber, emergencynumber, address, city, postalCode, education, updateAt, urlname], (err, results) => {
                    res.json({ message:"Profile Updated", name: name})
                    })
                } else {
                    const file = req.files.fileUpload
                    const filename = file.name
                    db.query("UPDATE user SET fullname = ?, name = ?, gender = ?, BoD=?, phoneNumber = ?, emergencyNumber = ?, address = ?, city = ?, postalCode = ?, education = ?, userUpdateAt=?, image = ? WHERE name=?;", [fullname, name, gender, BoD, phonenumber, emergencynumber, address, city, postalCode, education, updateAt, filename, urlname], (err, results) => {
                        res.json({ message:"Profile Updated", name: name})
                        file.mv('../frontend/src/asset/upload/' + file.name)
                    })
                }
                // db.query("UPDATE user SET fullname = ?, name = ?, gender = ?, BoD=?, phoneNumber = ?, emergencyNumber = ?, address = ?, city = ?, postalCode = ?, userUpdateAt=?  WHERE name=?;", [fullname, name, gender, BoD, phonenumber, emergencynumber, address, city, postalCode, updateAt, urlname], (err, results) => {
                //     console.log(err)
                //     res.send(results)
                //     file.mv('../frontend/src/asset/upload/' + file.name)
                // })
            }
        })
    }
})

router.get("/userkuotaById/:name", (req, res) => {
    const name = req.params.name
    let user_id = 0
    let isDeleted = "NO"
    db.query("SELECT * From user WHERE name = ?", name, (err, results) => {
        if (err) {
            console.log(err)
        }

        if (results.length > 0) {
            user_id = results[0].id
            db.query("SELECT * From userkuota WHERE user_id = ? AND isDeleted = ?", [user_id,isDeleted], (err, results) => {
                res.send(results)
            })
        }
    })
})

router.post("/ChangePassword", (req, res) => {
    const name = req.body.name
    const password = req.body.password
    const newpassword = req.body.newpassword
    const confirmpassword = req.body.confirmpassword
    const updateAt = req.body.updateAt
    var crypto = require('crypto')
    var hash = crypto.createHash('md5').update(password).digest('hex')

    if(password.length<=0 && newpassword.length<=0 && confirmpassword.length<=0){
        res.send({message:"All form must be filled"})
    }else if(password.length<=0){
        res.send({message:"Password can not be empty"})
    }else if(newpassword.length<=0){
        res.send({message:"New Password can not be empty"})
    }else if(newpassword == password){
        res.send({message:"New password can not be same as old password"})
    }else if (newpassword.length < 8) {
        res.send({ message: "Password must be at least 8 characters" })
    } else if (newpassword.length >= 20) {
        res.send({ message: "Password must be less than 20 characters" })
    } else if (newpassword.match(/[A-Z]/) == null) {
        res.send({ message: "Password must contain at least 1 uppercase letter" })
    } else if (newpassword.match(/[a-z]/) == null) {
        res.send({ message: "Password must contain at least 1 lowercase letter" })
    } else if (newpassword.match(/[0-9]/) == null) {
        res.send({ message: "Password must contain at least 1 number" })
    }else if(confirmpassword.length<=0){
        res.send({message:"Confirm Password can not be empty"})
    }else if(confirmpassword != newpassword){
        res.send({message:"Confirm Password must be same as password"})
    }else{
        db.query("SELECT * From user WHERE name = ?", name, (err, results) => {
            if (err) {
                console.log(err)
            }
            if (results.length > 0) {
                if (hash.match(results[0].password) != null) {
                    db.query("UPDATE user SET password = MD5(?), confirmpassword = MD5(?), userUpdateAt = ? WHERE name = ?;", [newpassword, confirmpassword, updateAt, name], (err, results) => {
                        res.send({message:"Password has changed"})
                    })
    
                } else {
                    res.send({ message:"Old password is not the same as the previous password" })
                }       
            } 
        })
    }
})

router.post("/minUserKuotaSession", (req, res) => {
        const name = req.body.name
        const updateAt = req.body.updateAt
        let kuotaSession = 0
        let user_id = 0
        db.query("SELECT * From user WHERE name = ?", name, (err, results) => {
            if (err) {
                console.log(err)
            }
            if (results.length > 0) {
                user_id = results[0].id
                db.query("SELECT * From userkuota WHERE user_id = ?", user_id, (err, results) => {
                    if (err) {
                        console.log(err)
                    }
                    if (results.length > 0) {
                        kuotaSession = results[0].classSession - 1
                        db.query("UPDATE userkuota SET classSession = ?, kuotaUpdateAt = ? WHERE user_id = ?;", [kuotaSession, updateAt, user_id], (err, results) => {
                            res.send({message:"Kuota updated"})
                        })
                    }
                })
            }
        })
})

module.exports = router;