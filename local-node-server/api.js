var express = require('express');
var api = express();
var port = process.argv[2] || 9000;

api.use(express.static(__dirname));

api.listen(port);
console.log('go to http://localhost:'+port);

api.route('/').get(homePage);
api.route('/json').get(jsonPage);

function homePage(request, response){
    console.log('home page hit');
    response.send('Welcome To My Home Page');
}

function jsonPage(request, response){
    console.log('json page hit');
    response.json({'message': 'Welcome To My JSON Page'});
}
