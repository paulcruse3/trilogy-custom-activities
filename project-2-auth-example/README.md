# node authentication example

Simple example of how to create users, log them and protect certain endpoints to ensure a user must be logged in

## Where do I Start

- create `process.env` variables for `process.env.APP_ENV`, `process.env.DB_URL` (this needs the mysql://username:password@hostname:port/database_name format) and `process.env.PORT`
- begin with `server.js`
- look at `routes.js`
- look at `controllers/user.js`
- look at `models/users.js` (mind the `s`)
- HINT: Make sure you look at the require statements first will help you follow the code
