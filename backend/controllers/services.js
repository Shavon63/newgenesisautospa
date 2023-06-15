const express = require('express')
const router = express.Router()
const db = require("../models")
const Services = require('../models/services')


// Showing all Routes for different services
router.get("/", (req, res)=>{
    db.Services.find(req.params).then((services)=>{
        res.send(services)
    })
})

//when ever a specific service is choosen well search the database for that specific on and send its data o clientside 
router.get('/:id', (req, res) => {
    db.Services.findById(req.params.id, (err, services) => {
        if (!services) {
            res.sendStatus(404)
            return
        }
        res.json(services)
    })
})

module.exports = router