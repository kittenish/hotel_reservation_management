var pool = require('./index').pool;

module.exports = function (hotelid, password, callback) {
	
    pool.getConnection(function(err, connection){
        var sql = 'select * from hotel where hotel_id = ? and hotel_password = ?';
        connection.query(sql, [hotelid,password],function (err, result) {
            if (err) {
                console.log("Hotel_login Error: " + err.message);
                return;
            }

            connection.release();
            callback(err,result);                     
        });
    });        
};