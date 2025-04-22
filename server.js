require('dotenv').config()
const express = require('express');
const connectToDb = require('./database/db')
const router = require('./router/router')

const app = express();
const port = 6001; 

//malware 
app.use(express.json()); 

//connect to database 
connectToDb();
  
// create router
app.use('/api/product', router);


app.listen(port, () => {
    console.log('server is now running on port', port);
})


