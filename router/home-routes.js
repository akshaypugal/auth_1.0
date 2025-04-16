const express = require('express')
const router = express.Router()
const authMiddleware = require('../middleware/auth-middleware')

router.get('/welcome', authMiddleware , (req ,res) =>{
    const{id , name ,email ,  role}  = req.userInform
    res.json({
        message : 'welcome to home page',
        User : {
            id : id , 
            name ,
            email , 
            role
        }
    })
} )

module.exports = router;


