const mysql = require('mysql2');
const config = require("../views/config");
let connection =mysql.createConnection(config.db)
 
connection.connect(function(err){
    if (err) {
        console.log(err);
    }

    console.log("mysql baglandı")
});
module.exports = connection.promise();
