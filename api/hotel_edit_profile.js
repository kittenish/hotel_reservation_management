var pool = require('./index').pool;

module.exports = function (hotelid, password, tel, email) {
		pool.getConnection(function(err, connection){

        var sql = 'update hotel set hotel_password = ? , hotel_tel = ? '+
        ' , hotel_email =?  where hotel_id = ?';
        //console.log(connection);
        connection.query(sql, [password, tel, email, hotelid],function (err, result) {
            if (err) {
                console.log("User_hotel_profile Error: " + err.message);
                return;
            }

            connection.release();
                             
        });
        });        
    };