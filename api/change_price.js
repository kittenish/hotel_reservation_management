var pool = require('./index').pool;

module.exports = function(room_type_id, room_price, special_day, hotel_id) {
	pool.getConnection(function(err, connection){
   		var sql = "insert into price(room_type_id, price, date, hotel_id) values (?, ?, ?, ?)";
        connection.query(sql, [room_type_id, room_price, special_day, hotel_id], function (err, result) {
            if (err) {
                console.log("Change price Error: " + err.message);
                return;
            }

            connection.release();
            console.log('Change price : ' , result);
            //connection.release();                  
        });
    });       
}