var pool = require('./index').pool;

module.exports = function (callback) {
		pool.getConnection(function(err, connection){

        var sql = 'select * from room_type';
        //console.log(connection);
        connection.query(sql, function (err, result) {
            if (err) {
                console.log("Hotel_all_room_type Error: " + err.message);
                return;
            }

            connection.release();
            console.log(result);
            
            //connection.release();
            callback(err,result);                     
        });
        });        
    };