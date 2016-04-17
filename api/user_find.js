var pool = require('./index').pool;

module.exports = function (username, callback) {
		pool.getConnection(function(err, connection){

        var sql = 'select * from customer where customer_id = ?';
        //console.log(connection);
        connection.query(sql, [username],function (err, result) {
            if (err) {
                console.log("User_find Error: " + err.message);
                return;
            }

            connection.release();
            console.log(result);
            
            //connection.release();
            callback(err,result);                     
        });
        });        
    };