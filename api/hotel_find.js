var pool = require('./index').pool;

module.exports = function (hotelid, callback) {
	
    pool.getConnection(function(err, connection){

        var sql = 'select * from hotel where hotel_id = ?';
        connection.query(sql, [hotelid],function (err, result) {
            if (err) {
                console.log("Hotel_find Error: " + err.message);
                return;
            }

            connection.release();
            callback(err,result);                     
        });
    });        
};