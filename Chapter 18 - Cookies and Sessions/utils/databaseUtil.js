const mongo = require('mongodb');

const MongoClient = mongo.MongoClient;

const MONGO_URL = "mongodb://127.0.0.1:27017/airbnb";

let _db; // _ usually mean private member

const mongoConnect = (callback) => {
  MongoClient.connect(MONGO_URL).then(client => {
      callback();
      _db = client.db("airbnb");
  }).catch(error => console.log("Error while connecting to mongo" ,error));
};

const getDB = () => {
    if (!_db) {
        throw new Error("MongoDB connection failed/not connected");
    }
    return _db;
}

exports.mongoConnect = mongoConnect;
exports.getDB = getDB;