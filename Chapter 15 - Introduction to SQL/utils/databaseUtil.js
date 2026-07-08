const mysql = require("mysql2");

const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "Dev@4733",
    database: "airbnb"
});

module.exports = pool.promise();