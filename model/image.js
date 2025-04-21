const mongoose = require('mongoose');


const imgSchema = new mongoose.Schema({
    url:{
        type : String , 
        require : true 
    },
    publicId : {
        type : String , 
        require : true
    },
    uploadedBy : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User',
        require : true 
    }
} , {timestamps : true })


module.exports = mongoose.model("Image" , imgSchema)