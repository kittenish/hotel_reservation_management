var pool = require('./index').pool;

module.exports = function (adminid, password, callback) {
		
    pool.getConnection(function(err, connection){
        var sql = 'select * from admin where admin_id = ? and admin_password = ?';
        connection.query(sql, [adminid,password],function (err, result) {
            if (err) {
                console.log("Hotel_login Error: " + err.message);
                return;
            }
            connection.release();
            callback(err,result);                     
        });
    });        
};