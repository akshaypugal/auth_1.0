const express = require('express');
const routes = express.Router();
const {register , login} = require('../controller/control')


routes.post('/register' , register );
routes.get('/login' , login )




module.exports = routes 