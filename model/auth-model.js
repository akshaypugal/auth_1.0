const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
     name : {
        type : String , 
        require : true ,
        unique : true , 
        trim : true , 
        max : [100 , 'maxium 100 charachter only '],
      },
    email : {
        type : String, 
        require : true , 
        unique : true , 
        trim : true , 
        max : [200 , 'maxium 200 charachter only ']
    },
    password : {
        type  : String, 
        trim : true , 
    },
    role : {
        type : String , 
        enum : [ 'user' , 'admin'],
        default : 'user'
    }
})

module.exports = mongoose.model("User" , userSchema)