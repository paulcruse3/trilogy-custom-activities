require('dotenv').config();

var express = require('express');
var api = express();
var port = process.env.PORT || 9000;

api.use(express.static(__dirname));

api.listen(port);
console.log('go to http://localhost:'+port);

api.route('/').get(homeEndpoint);
api.route('/json').get(jsonEndpoint);
api.route('/id/:id').get(idEndpoint);

function homeEndpoint(request, response){
    console.log('home page hit');
    response.send('Welcome To My Home Endpoint');
}

function jsonEndpoint(request, response){
    console.log('json page hit');
    response.json({'message': 'Welcome To My JSON Endpoint'});
}

function idEndpoint(request, response){
    console.log('id page hit');
    response.json ({'idRequested': request.params.id}); //notice its a string
}
