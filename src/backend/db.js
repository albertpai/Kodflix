const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
require('dotenv').config();

// Connection URL
const url = process.env[`DB_URL_${process.env.NODE_ENV}`];
console.log(process.env.NODE_ENV)
const dbName = url.substr(url.lastIndexOf('/') + 1);

module.exports = { connect };

// Use connect method to connect to the Server
function connect() {
    return new Promise((resolve, reject) => {
        MongoClient.connect(url, { useNewUrlParser: true }, function (err, client) {
            assert.equal(null, err);
            console.log("Connected successfully to server");
            const dbOjbect = client.db(dbName);
            resolve(dbOjbect);
        });
    });
}