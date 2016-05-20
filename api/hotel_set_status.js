var pool = require('./index').pool;

module.exports = function (status, hotelid) {
	
    pool.getConnection(function(err, connection){

        var sql = 'update hotel set hotel_status = ?  where hotel_id = ?';
        connection.query(sql, [status, hotelid],function (err, result) {
            if (err) {
                console.log("hotel set status Error: " + err.message);
                return;
            }

            connection.release();
            console.log('hotel set status : ',hotelid);                   
        });
    });        
};