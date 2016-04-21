var pool = require('./index').pool;

module.exports = function (hotelid, callback) {
		pool.getConnection(function(err, connection){

        var sql = 'select * from room_type where hotel_hotel_id = ?';
        //console.log(connection);
        connection.query(sql, [hotelid],function (err, result) {
            if (err) {
                console.log("Hotel_find Error: " + err.message);
                return;
            }

            connection.release();
            console.log(result);
            
            //connection.release();
            callback(err,result);                     
        });
        });        
    };