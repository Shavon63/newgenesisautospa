// dependencies 
const express = require('express')
const router = express.Router()
const db = require("../models")
const Packages = require('../models/packages')

router.get("/", (req, res)=>{
    db.Packages.find(req.params, (err,packages)=>{
        if(!packages){
            req.send(404)
        }else{
            res.json(packages)
        }
    })
})


router.get("/:id", (req, res)=>{
    db.Packages.findById(req.params.id, (err, packages)=>{
        if(!packages){
            res.sendStatus(404)
        }else{
            res.json(packages)
        }
    })
})

module.exports = router