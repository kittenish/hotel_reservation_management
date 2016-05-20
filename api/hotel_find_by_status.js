var pool = require('./index').pool;

module.exports = function (status, callback) {
	
    pool.getConnection(function(err, connection){

        var sql = 'select * from hotel where hotel_status = ?';
        connection.query(sql, [status],function (err, result) {
            if (err) {
                console.log("Hotel_find_by_status Error: " + err.message);
                return;
            }

            connection.release();
            callback(err,result);                     
        });
    });        
};