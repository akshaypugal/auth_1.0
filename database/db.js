const mongoose = require('mongoose');
require('dotenv').config()


const connect = async()=>{
       const connected =  await mongoose.connect(process.env.DB_URL)
       if(connected){
        console.log('connected to the database');
       }else{
        console.log('unable to with database')
       }
}


module.exports = connect