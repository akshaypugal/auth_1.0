

const adminMiddleWare = (req , res , next) =>{
    if(req.userInform.role !== "admin"){
         res.status(401).json({
            message : 'access denied . admin rights needed'
         })
    }
    next()
}

module.exports = adminMiddleWare