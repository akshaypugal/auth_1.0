const jwt = require('jsonwebtoken')
require('dotenv').config()
const authMiddleware = async(req , res , next) =>{
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if(!token){
        res.status(401).json({
            message : 'token is not provide . kindly login'
        })
    }
    try {

        const decodeInform = jwt.verify(token , process.env.JWT_KEY);
        req.userInform = decodeInform
        console.log(decodeInform);  
        next()
        
    } catch (error) {
        res.status(500).json({
            success : false , 
            message : 'unable to authenticate . login first'
        })
    }
    
}

module.exports = authMiddleware