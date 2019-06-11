const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const mysql      = require('mysql');

app.get('/', (req, res) => {
    
        var connection = mysql.createConnection({
        host     : 'us-cdbr-iron-east-02.cleardb.net',
        user     : 'b295dbf76e6940',
        password : '1c02d878',
        database : 'heroku_bed588c7f1cc068'
        });

        connection.connect();

        connection.query('SELECT * from users', function(err, rows, fields) {
        if (!err)
            console.log('The solution is: ', rows);
        else
            console.log('Error while performing Query.');
        });

        connection.end();
            res.send('Hello World! from : ' + req.query.name)

})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))