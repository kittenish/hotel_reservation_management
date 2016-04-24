var pool = require('./index').pool;

module.exports = function (hotelid, status, callback) {
		pool.getConnection(function(err, connection){

        var sql = 'select * from(room_type natural join reservation natural join hotel)'+
            ' where room_type_id = room_type_room_type_id and hotel_id = hotel_hotel_id'+
            ' and hotel_hotel_id = ? and reser_status = ?';
        
            
        //console.log(connection);
        connection.query(sql, [hotelid, status],function (err, result) {
            if (err) {
                console.log("reservation_find_by_hotelid Error: " + err.message);
                return;
            }

            connection.release();
            console.log(hotelid);
            console.log(result);
            
            //connection.release();
            callback(err,result);                     
        });
        });        
    };