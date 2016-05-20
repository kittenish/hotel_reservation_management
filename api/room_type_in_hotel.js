var pool = require('./index').pool;

module.exports = function (room_typeid, hotelid, callback) {
	
    pool.getConnection(function(err, connection){

        var sql = 'select * from room_type '+
            'where hotel_hotel_id = ? and room_type_id = ?';
        connection.query(sql, [hotelid, room_typeid],function (err, result) {
            if (err) {
                console.log("room_type_in_hotel Error: " + err.message);
                return;
            }

            connection.release();
            callback(err,result);                     
        });
    });        
};