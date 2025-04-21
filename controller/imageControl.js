const Image = require('../model/image');
const uploadImage = require('../helpers/cloudinaryHelper')


const uploadImage1 =async(req ,res)=>{
     try {
           if(!req.file){
            console.log('No file being uploaded . kindly upload the img');
            res.status(400).json({
                success : false , 
                message : "File is not uploaded"
            })
           }

           const{url , publicId}  = await uploadImage(req.file.path)
           const newImage = new Image({
             url , 
             publicId,
             uploadedBy : req.userInform.id
           })
           await newImage.save();


           res.status(200).json({
              success : true, 
              message : 'Image successfully uploaded',
              data : newImage 
           })

     } catch (error) {
         console.log('Error in uploading image' , error);
         res.status(500).json({
            success : false , 
            message : 'Something went wrong'
         })
     }
}



module.exports = uploadImage1 ; 