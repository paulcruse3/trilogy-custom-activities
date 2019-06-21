# Sequelize The Original

The original is always better than the sequel :laughing:. [Want Emojis?](https://gist.github.com/rxaviers/7360908)

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

* Want to select particular columns from a particular table, see example below:

```javascript
    let query = {
        columns: ['column1', 'column2', 'column3'], //will default to ['*'] for everything (not recommend :suspect:)
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
