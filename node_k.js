var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'form_node'
});

  //                INSERT INTO users VALUES (NULL, "Kamil", "Ślimak")               \\
 //                               DELETE FROM users                                   \\
//                                DROP TABLE users                                     \\


connection.query('SELECT * FROM users ',function(err,rows){
    if(err){
        console.log(err);
    } else {
        console.log(rows);
    }
});

connection.end();