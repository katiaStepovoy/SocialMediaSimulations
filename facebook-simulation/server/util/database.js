const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = callback => {
    MongoClient.connect('mongodb+srv://katia:tEX8evlTCqSeGNZg@facebookmock.dsjzbsd.mongodb.net/test')
    .then(client => {
        console.log('connected!');
        _db = client.db();
        callback();
    })
    .catch(err => {
        console.log(err);
        throw err;
    });
};

const getDb = () => {
    if (_db) {
        return _db;
    }
    throw 'No database found!';
};

module.exports.mongoConnect = mongoConnect;
module.exports.getDb = getDb;

//module.exports = mongoConnect;