const { constants } = require('buffer')
const { Router } = require('express')
const express = require('express')
const { fdatasync } = require('fs')
const { type } = require('os')
const router = express.Router()

const db = require('../config/db')

router.post("/feedback", (req, res) => {
    
    if(!req.files){
        return res.status(400).send("No files uploaded.")
    }
        const file = req.files.fileUpload
        const filename = file.name
        if(file.mimetype == "image/jpeg" ||file.mimetype == "image/png"||file.mimetype == "image/gif" ){
                
            console.log(filename)
            console.log(file.tempFilePath)
            console.log(file.mimetype)
            // file.mv('frontend/src/asset/upload'+file.name, function(err) {
                           
            //     if (err)

            //       return res.status(500).send(err);
            //             // var sql = "INSERT INTO `users_image`(`first_name`,`last_name`,`mob_no`,`user_name`, `password` ,`image`) VALUES ('" + fname + "','" + lname + "','" + mob + "','" + name + "','" + pass + "','" + img_name + "')";

            //             //   var query = db.query(sql, function(err, result) {
            //             //        res.redirect('profile/'+result.insertId);
            //             //   });
            //          });
        } else {
          message = "This format is not allowed , please upload file with '.png','.gif','.jpg'";
          res.render('index.ejs',{message: message});
        }
    
    
    
    
})

module.exports = router;