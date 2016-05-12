var pool = require('./index').pool;

module.exports = function (username, password, callback) {
		pool.getConnection(function(err, connection){
            //console.log(username,password);
        var ss = 'select * from customer ';
        connection.query(ss, function(err, result){
            console.log(result);
        });
        var sql = 'select * from customer where customer_id = ? and customer_password = ?';
        //console.log(connection);
        connection.query(sql, [username,password],function (err, result) {
            if (err) {
                console.log("User_login Error: " + err.message);
                return;
            }

            connection.release();
           // console.log(result);
            
            //connection.release();
            callback(err,result);                     
        });
        });        
    };