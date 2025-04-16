const express = require('express');
const routes = express.Router()
const authMiddleware = require('../middleware/auth-middleware')
const adminMiddleWare = require('../middleware/admin-middleware')


routes.get('/welcome' ,authMiddleware , adminMiddleWare,  (req , res) =>{
    res.json({
        message : "welcome to admin page"
    })
})



module.exports  = routes