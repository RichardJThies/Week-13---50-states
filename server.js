let express = require('express')
let states_api = require('./routes/states')//pull in states.js file

let app = express()//create web server app

app.use(express.json())//enables web server to understand JSON requests

app.use('/api', states_api)//makes all routes in "states_api" avaliable

app.use(function(req, res, next){//error handle for any other request other than aren't to the API
    res.status(404).send('Not found')//response for resource not on hand
})

app.use(function(err, req, res, next) {
    console.log(err)//message for developers
    res.status(500).send('Server error')//generic error for some problem on server
})

let server = app.listen(process.env.PORT || 3000, function(){   //creates server to run app. "process.env.PORT || 3000" tells server what port to use. Azure will create an environment variable, generate a port and
    console.log('server running on port', server.address().port)//sets the port used to that generated port using the variable. Otherwise, port 3000 (locally) will be used.
})

