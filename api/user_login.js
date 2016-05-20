var pool = require('./index').pool;

module.exports = function (username, password, callback) {
	
    pool.getConnection(function(err, connection){
        var sql = 'select * from customer where customer_id = ? and customer_password = ?';
        connection.query(sql, [username,password],function (err, result) {
            if (err) {
                console.log("User_login Error: " + err.message);
                return;
            }

            connection.release();
            callback(err,result);                     
        });
    });        
};