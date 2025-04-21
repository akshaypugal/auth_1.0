const express = require('express');
const connect = require('./database/db');
const routes = require('./router/routes')
const router = require("./router/home-routes")
const adminRoutes = require('./router/admin-routes')
const imageRoutes = require('./router/image-routes')
require("dotenv").config();

const port = process.env.PORT;
const app = express();
app.use(express.json());
connect()
app.use('/auth' , routes)
app.use('/home' , router)
app.use('/admin' , adminRoutes)
app.use('/image' , imageRoutes )




app.listen(port , () =>{
    console.log(`Listening on port ${port}`)
});





