require('dotenv').config();

var express = require('express');
var app = express();

app.use(express.static(__dirname + '/views'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

require("./routes")(app);

app.listen(process.env.PORT || 9000);
