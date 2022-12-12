let express = require('express')
let States = require('../models').States//'..' means go up a level in the file system and pull in the States model

let router = express.Router()//create router

//fetches all of the states
router.get('/states', function(req, res, next){//creates 1st route. '/states' creates a path to allow access to the states
    States.findAll({order: ['name']}).then(states => {//States model will find all the states. Array will ensure they are ordered by name IN an array
        return res.json(states)
    })
    .catch(err => next(err))//any errors are passed to error handler
})

// patch route to update a state
router.patch('/states/:name', function(req, res, next){//:name will match any state to states
    let stateName = req.params.name//finds which state to be modified. "req.params" will find any parts of the URL being updated with "/:name", ".name" must be there to match with "/:name".
    let stateVisited = req.body.visited//"req.body" is a JSON object sent by vue client, visited is the boolean value
    
    States.update({visited: stateVisited}, {where: {name:stateName}})//only 1 state to visited at a time. "where: {name:stateName" means find the row in the db where name is the one searching for, then change 
        .then(rowsUpdated => {//rowsUpdated is an array of information that sequelize sends back about what was updated in db                         //visited value to whatever stateVisited is (true or false)
            let numberOfRowsUpdated = rowsUpdated[0]//
            if(numberOfRowsUpdated == 1) {//if number of rows is 1, state being updated has been fouund and updated
                return res.send('ok')//confirms state IS in db, no data needs to be returned. Returns status code 200
            }
            return res.status(404).send('State not found')//if no state found, 404 errot msg
        })   
        .catch(err => next(err))//if some other problem, generic error handler from server.js will be called                                                     
})

module.exports = router//allows other files to access router


