var pool = require('./index').pool;

module.exports = function (hotelid, password, callback) {
		pool.getConnection(function(err, connection){
            //console.log(username,password);
        var sql = 'select * from hotel where hotel_id = ? and hotel_password = ?';
        //console.log(connection);
        connection.query(sql, [hotelid,password],function (err, result) {
            if (err) {
                console.log("Hotel_login Error: " + err.message);
                return;
            }

            connection.release();
            //console.log(result);
            
            //connection.release();
            callback(err,result);                     
        });
        });        
    };