const cloudinary = require('../config/cloudinary')


const uploadImage =async(filePath) =>{
    try {
         const result = await cloudinary.uploader.upload(filePath);
         return {
            url : result.url , 
            publicId : result.public_id , 
         }

    } catch (error) {
         console.log("error while uploading file" , error)
    }
}


module.exports = uploadImage ; 