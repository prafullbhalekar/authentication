var express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')

var PORT = 3000
var api = require('./routes/api')
var app = express()
app.use(cors())
 
app.use(bodyParser.json())
app.use('/api' , api)
app.get('/', function(req, res) {
    res.send('Hello from server')
})

app.listen(PORT, function(){
    console.log('server is running on localhost :' + PORT)
})
