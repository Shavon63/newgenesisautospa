const express = require('express')
const app = express() 
const cors = require('cors')
require('dotenv').config()
//access packages/services in controller
const packagesCtrl = require('./controllers/packages')
const servicesCtrl = require('./controllers/services')
const path = require('path')


// allows access to cors: frontend/backend communication
app.use(cors()) 
//body parser: for including info in the request of url into info we can use in variables like (req/body)
app.use(express.urlencoded({ extended: true }));
app.use(express.json())
// // Use controllers for all other routes
app.use("/packages", packagesCtrl)
app.use("/services", servicesCtrl)

app.listen(3000, ()=> {
   console.log("app is running on port 3000")
})