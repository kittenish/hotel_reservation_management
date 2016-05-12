var pool = require('./index').pool;

module.exports = function (adminid, password, callback) {
		pool.getConnection(function(err, connection){
            //console.log(username,password);
        var sql = 'select * from admin where admin_id = ? and admin_password = ?';
        //console.log(connection);
        connection.query(sql, [adminid,password],function (err, result) {
            if (err) {
                console.log("Hotel_login Error: " + err.message);
                return;
            }

            connection.release();
            //console.log(result);
            
            //connection.release();
            callback(err,result);                     
        });
        });        
    };