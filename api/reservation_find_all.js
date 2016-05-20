var pool = require('./index').pool;

module.exports = function (callback) {
	
    pool.getConnection(function(err, connection){

        var sql = 'select * from reservation join hotel join room_type where '+
            ' room_type_room_type_id = room_type_id and hotel_hotel_id = hotel_id'+
            ' order by reser_begin';
        connection.query(sql, function (err, result) {
            if (err) {
                console.log("reservation find all Error: " + err.message);
                return;
            }

            connection.release();
            callback(err,result);                     
        });
    });        
};