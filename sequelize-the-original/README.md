# Sequelize The Original :movie_camera:

The original is always better than the sequel :laughing:. ([Want Emojis?](https://gist.github.com/rxaviers/7360908))

## Installation

* Just copy and past the contents of the file

* Please make sure you edit the location of the `connection.js` at the top to point to your connection file.

## Basic Usage

### Insert

* Want to insert data into particular table, see example below:

```javascript
let query = {
    table: 'tableName',
    data: objectToInserted //ensure the keys of the object match the table columns
};
orm.insert(query, function(error, data){
    console.log(data);
});
```

### Select (No Conditions)

* Want to select ALL the data's particular columns from a particular table, see example below:

```javascript
let query = {
    columns: ['column1', 'column2', 'column3'], //will default to ['*'] (not recommended)
    from:'tableName'
};
orm.select(query, function(error, data){
    console.log(data);
});
```

### Select (With Conditions)

* Want to select particular columns from a particular table where a certain condition is met, see example below:

```javascript
let query = {
    columns: ['column1', 'column2', 'column3'],
    from:'tableName',
    where: [{column1: condition1}]
};
orm.select(query, function(error, data){
    console.log(data);
});
```

### Select (With MULTIPLE Conditions)

* Want to select particular columns from a particular table where a certain condition is met, see example below:

```javascript
let query = {
    columns: ['column1', 'column2', 'column3'],
    from:'tableName',
    where: [{column1: condition1}, {column2: condition2}]
    operator: 'AND' //or you can use 'OR' (will default to 'AND' if not provided)
};
orm.select(query, function(error, data){
    console.log(data);
});
```

### Update

* Want to update a single row of data in particular table, see example below:

```javascript
let query = {
    table: 'tableName',
    data: objectToUpdate, //ensure the keys of the object match the table columns
    where: [{column1: condition1}]
};
orm.update(query, function(error, data){
    console.log(data);
});
```

### Delete

* Want to delete a single row of data from a particular table, see example below:

```javascript
let query = {
    table: 'tableName',
    where: [{todo_id: request.params.id}]
};
orm.delete(query, function(error, data){
    console.log(data);
});
```

### Other Queries

* Want to run any other query not covered by these functions, just pass it in like so:

```javascript
let queryString = 'SELECT * FROM users JOIN comments ON comment.user_id = users.user_id WHERE users.user_id = ?';
let queryArray = [user.user_id]; //has to be a primitive value
orm.query(queryString, queryArray, function(error, data){
    console.log(data);
});
```

### Create A Table :-1:

* For some crazy reason you want your app to dynamically create tables? See the example below:

```javascript
// table name first, then an object of objects, describing the table
orm.create('users', {
    user_id: {
        type: 'INT(11)',
        autoIncrement: true,
        primaryKey: true,
        notNull: true
    },
    company_id: {
        type: 'INT(11)',
        foreignKey: true,
        referenceTable: 'companies',
        referenceId: 'company_id',
        notNull: true
    },
    username: {
        type: 'VARCHAR(256)',
        uniqueKey: true,
        notNull: true
    },
    password: {
        type: 'VARCHAR(256)',
        notNull: true
    },
    salt: {
        type: 'VARCHAR(256)',
        notNull: true
    },
    session_token: {
        type: 'VARCHAR(256)'
    },
    created: {
        type: 'DATETIME',
        timestampCreate: true
    },
    modified: {
        type: 'DATETIME',
        timestampUpdate: true
    }
});
```

### DEBUG :bug:

* Want to debug your query and see exactly what the ORM is sending to the database, just add the key `debug:true` to any of the above functions

```javascript
let query = {
    table: 'tableName',
    data: objectToInserted, //ensure the keys of the object match the table columns
    debug: true //check your console for the results
};
orm.insert(query, function(error, data){
    console.log(data);
});
```
