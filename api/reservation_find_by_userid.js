var pool = require('./index').pool;

module.exports = function (userid, status, callback) {
	
    pool.getConnection(function(err, connection){

        var sql = 'select * from(room_type natural join reservation natural join hotel)'+
            ' where room_type_id = room_type_room_type_id and hotel_id = hotel_hotel_id'+
            ' and customer_customer_id = ? and reser_status = ? order by reser_begin';
        connection.query(sql, [userid, status],function (err, result) {
            if (err) {
                console.log("reservation_find_by_userid Error: " + err.message);
                return;
            }

            connection.release();
            callback(err,result);                     
        });
    });        
};