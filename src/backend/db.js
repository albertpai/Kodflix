const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const db = {
    userName: 'kodflix',
    password: 'kodflix',
    dbName: 'kodflix',
    host: 'localhost',
    port: '27017',
}

// Connection URL
const url = `mongodb://${db.userName}:${db.password}@${db.host}:${db.port}/${db.dbName}`;

module.exports = { connect };

// Use connect method to connect to the Server
function connect() {
    return new Promise((resolve, reject) => {
        MongoClient.connect(url, function (err, client) {
            assert.equal(null, err);
            console.log("Connected successfully to server");
            const dbOjbect = client.db(db.dbName);
            resolve(dbOjbect);
        });
    });
}