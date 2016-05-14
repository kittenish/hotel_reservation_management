var pool = require('./index').pool;

module.exports = function (hotelid, callback) {
		pool.getConnection(function(err, connection){


        var sql = 'select room_no, room_status, room_type_name, room_customer from room_info join room_type '+
        'where room_type_id = room_type_room_type_id   and '+
        'hotel_id = ? order by room_no';
        //console.log(connection);
        connection.query(sql, [hotelid],function (err, result) {
            if (err) {
                console.log("Hotel_room_status Error: " + err.message);
                return;
            }

            connection.release();
           console.log(result);
            
            //connection.release();
            callback(err,result);  
                          
        });
        });        
    };