let express = require('express')
let States = require('../models').States//'..' means go up a level in the file system and pull in the States model

let router = express.Router()//create router

router.get('/states', function(req, res, next){//creates 1st route. '/states' creates a path to allow access to the states
    States.findAll({order: ['name']}).then(states => {//States model will find all the states. Array will ensure they are ordered by name IN an array
        return res.json(states)
    })
    .catch(err => next(err))//any errors are passed to error handler
})

module.exports = router//allows other files to access router


