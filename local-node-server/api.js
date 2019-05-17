var express = require('express');
var api = express();
var port = process.argv[2] || 9000;

api.use(express.static(__dirname));

api.listen(port);
console.log('go to http://localhost:'+port);

api.route('/').get(homePage);
api.route('/json').get(jsonPage);
api.route('/id/:id').get(idPage);

function homePage(request, response){
    console.log('home page hit');
    response.send('Welcome To My Home Page');
}

function jsonPage(request, response){
    console.log('json page hit');
    response.json({'message': 'Welcome To My JSON Page'});
}

function idPage(request, response){
    console.log('id page hit');
    // response.send('You requested id:' + request.params.id); WRONG APIs USE JSON
    response.json ({'idRequested': request.params.id}); //notice its a string
}
