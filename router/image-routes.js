const express = require('express');
const imgRoute = express.Router()
const authMiddleware = require('../middleware/auth-middleware')
const adminMiddleWare = require('../middleware/admin-middleware');
const imgMiddleware = require('../middleware/img-middleware');
const imageControl = require('../controller/imageControl')

imgRoute.post('/upload' ,  authMiddleware , adminMiddleWare , imgMiddleware.single('image')  , imageControl )






module.exports = imgRoute