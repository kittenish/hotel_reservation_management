var pool = require('./index').pool;

module.exports = function (room_typeid, callback) {
	
    pool.getConnection(function(err, connection){

        var sql = 'select * from(room_type natural join hotel)'+
            'where hotel_hotel_id = hotel_id and room_type_id = ?';
        connection.query(sql, [room_typeid],function (err, result) {
            if (err) {
                console.log("room_type_find Error: " + err.message);
                return;
            }

            connection.release();
            callback(err,result);                     
        });
    });        
};