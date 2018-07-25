var express = require('express')
const jwt = require('jsonwebtoken')
var router = express.Router()
var User = require('../models/user')



var mongoose = require('mongoose')
var db = "mongodb://userprafull1:userprafull2@ds241530.mlab.com:41530/dataevent"

mongoose.connect(db, err =>{
    if (err) {
        console.error('Error!' + err)
    } else {
        console.log('connected to mongodb')
    }
})
router.get('/', (req, res) =>{
    res.send('from api route')
})

router.post('/register', (req, res) =>{
    let userData = req.body
    let user = new User(userData)
    user.save((error, registerUser) =>{
        if (error) {
            console.log(error)
        } else {
            let payload = { subject: registerUser._id}
            let token = jwt.sign(payload, 'secretKey')
            res.status(200).send({token})
        }
    })
})

router.post('/login', (req, res) =>{
    let userData = req.body

    User.findOne({email: userData.email} , (error, user) => {
        if (error) {
            console.log(error)
        } else {
             if (!user) {
                 res.status(401).send('Invalid email')
             } else 
             if (user.password !== userData.password) {
                 res.status(401).send('Invalid password')
             } else {
                let payload = { subject: user._id}
                let token = jwt.sign(payload, 'secretKey')
                 res.status(200).send({token})
             }
        }
    } ) 
})


module.exports = router