# Project 2 Init

## 0) Select A Dev Ops :neckbeard:

* pick one person to be your dev ops engineer. He/She will be the `ONLY` one to down the following steps (except for those steps that say `EVERYONE`)

## 1) Create GitHub Organization :family:

* In the upper-right corner of any page, click your profile photo, then click Settings
* In your user settings sidebar, click Organizations
* In the "Organizations" section, click New organization
* Invite your teammates

## 2) Create GitHub repo for that organization :open_file_folder:

* Make it public
* Initialize it
* [EVERYONE] clone and pull down the repo and try to create a branch and push it up
* @NOTE: For those using an app to manage your git (like GitKraken) you may have to grant access to that app: https://github.com/settings/applications)
* invite your teammates to that repo

## 3) Init the application :fast_forward:

* `cd` to your project directory
* create a `.gitignore` file then add `node_modules/*` and `.env` to that file (should look like this):

```
node_modules/*
.env
```

* run `npm init -y`
* open package.json in your IDE
* remove the following keys: `keywords`, `author`, `main`, `scripts.test`
* install nodemon with `npm install nodemon`
* install dotenv with `npm install dotenv`
* install express with `npm install express`
* add `start` key to `scripts` with `nodemon server.js`
* Your `package.json` should look something like this:

```json
{
    "name": "project-2",
    "version": "1.0.0",
    "description": "project 2",
    "scripts": {
        "start": "nodemon server.js"
    },
    "repository": {
        "type": "git",
        "url": "git+https://github.com/trilogy-project-2/project-2.git"
    },
    "license": "ISC",
    "bugs": {
        "url": "https://github.com/trilogy-project-2/project-2/issues"
    },
    "homepage": "https://github.com/trilogy-project-2/project-2#readme",
    "dependencies": {
        "dotenv": "^8.0.0",
        "express": "^4.17.1",
        "nodemon": "^1.19.1"
    }
}
```

## 3) Add boiler plate code for .env, server.js and config.js :pencil:

* [EVERYONE] create a `.env` file in the root of your project folder; add this to the file:
```
# App environment Config
APP_ENV=local

# DB Config (following this pattern mysql://username:password@hostname:port/database_name)
DB_URL= mysql://root:root@127.0.0.1:3306/database

# API Keys go below
# use command heroku config:set KEY=VALUE to set api keys
```

* create a `config.js` file in the root of your project folder
```js
let config = {
    local: {
        mysql:{
            url: process.env.DB_URL
        },
        apiKeys:{}
    },
    prod: {
        mysql:{},
        apiKeys:{}
    }
};
module.exports = config[process.env.APP_ENV || 'local'];
```

* create a `server.js` file in the root of your project folder; add this to the file:
```js
require('dotenv').config();

var express = require('express');
var app = express();
var port = process.env.PORT || 9000;
var config = require('./config');

app.use(express.static(__dirname + '/views')); // you should change this to be wherever your html files are
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.listen(port);

//@TODO Delete below after you verify the the app is working
app.route('/').get(function(request, response) {
    response.json(config);
});
```

## 4) Push to Heroku :space_invader:

* from the project directory run `heroku login`
* then `heroku create`
* then `git push heroku master`
* then `heroku config:set APP_ENV=prod` (remember this command to because you will need to add api keys)
* enable automatic deploy is configured properly `<your-app-project> -> Deploy` (ensure Heroku Dashboard has team access)

## 5) Add Credit Card to Heroku :credit_card:

* click your profile top right corner -> `Account Settings`
* Set Up `Two Factor Authentication`
* Billing Enter Credit Card Info

## 6) Add JawDB to your Project :fish:

* add JawsDB to your project with `heroku addons:create jawsdb`
* add `process.env.JAWSDB_URL` to your prod.mysql.url in your `config.js` file
* git `stage`, `commit` and `push` to master, check your app online to see if the changes
* (optional) if you don't see your changes you may have to `git push heroku master`, ensure your automatic deployment is working properly.

## 7) Test Database Connection [EVERYONE DO] :syringe:

* open your favorite MySQL GUI (MySQL Workbench or Sequel Pro)
* Go to your your project app page in the browser (that crazy url that heroku gives you)
* c/p past parts of the `mysql` config key as appropriate (remember its in this format: mysql://username:password@hostname:port/database_name)

## 8) Lock Down Master Branch :lock:

* remove unnecessary code, then commit and push master (will be the last time)
* got to github -> your organization -> your team repo -> settings -> branches -> add rule
