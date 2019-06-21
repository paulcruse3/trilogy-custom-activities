var connection = require('./connection');

var orm = {
    create: function(name, properties, retry=0){
        var query = this._tablePropertiesBuilder(name, properties);
        connection.query(query, function(error, result){
            if (error) {
                if (query.includes('FOREIGN KEY') && retry < 500){
                    console.log('Waiting on foreign key constraint: ', retry);
                    orm.create(name, properties, retry+1);
                } else {
                    console.log('Error creating table: ', query, error);
                    throw error;
                }
            } else {
                console.log('Created table: ', query);
            }
        });
    },
    _tablePropertiesBuilder: function(name, properties){
        var query = 'CREATE TABLE IF NOT EXISTS ' + name + '(';
        var tableProperties = [];
        for (var column in properties) {
            var statement = [];
            statement.push(column + ' ' + properties[column].type);
            if (properties[column].notNull){
                statement.push('NOT NULL');
            }
            if (properties[column].autoIncrement){
                statement.push('AUTO_INCREMENT');
            }
            if (properties[column].default != null){
                statement.push('DEFAULT '+ properties[column].default);
            }
            if (properties[column].timestampCreate){
                statement.push('DEFAULT CURRENT_TIMESTAMP');
            }
            if (properties[column].timestampUpdate){
                statement.push('ON UPDATE CURRENT_TIMESTAMP');
            }
            tableProperties.push(statement.join(' '));
            if (properties[column].primaryKey){
                tableProperties.push('PRIMARY KEY ('+column+')');
            }
            if (properties[column].uniqueKey){
                tableProperties.push('UNIQUE KEY '+column+'('+column+')');
            }
            if (properties[column].foreignKey){
                var fkQuery = 'CONSTRAINT '+column+' FOREIGN KEY('+column+')';
                fkQuery += ' REFERENCES '+properties[column].referenceTable+ '('+properties[column].referenceId+')';
                fkQuery += ' ON DELETE CASCADE ON UPDATE CASCADE';
                tableProperties.push(fkQuery);
            }
        }
        query += tableProperties.join(',');
        query += ') ENGINE=InnoDB DEFAULT CHARSET=utf8;';
        return query;
    },
    select: function(query, callback) {
        var queryString = "SELECT ?? FROM ??";
        if (!query.columns){
            query.columns = ['*'];
        }
        var searchCriteria = [query.columns, query.from];
        if (query.equals){
            queryString += " WHERE ?? = ?";
            searchCriteria.push(query.where);
            searchCriteria.push(query.equals);
        }
        connection.query(queryString, searchCriteria, function(error, result) {
            callback(error, result);
        });
    },
    insert: function(query, callback) {
        var queryString = "INSERT INTO ?? SET ?";
        connection.query(queryString, [query.table, query.data], function(error, result) {
            callback(error, result);
        });
    },
    update: function(query, callback) {
        var queryString = "UPDATE ?? SET ? WHERE ?";
        console.log(query);
        connection.query(queryString, [query.table, query.data, query.equals], function(error, result) {
            callback(error, result);
        });
    },
    delete: function(query, callback) {
        var queryString = "DELETE FROM ?? WHERE ?";
        connection.query(queryString, [query.table, query.equals], function(error, result) {
            callback(error, result);
        });
    }
};

module.exports = orm;
