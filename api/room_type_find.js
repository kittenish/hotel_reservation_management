var pool = require('./index').pool;

module.exports = function (room_typeid, callback) {
		pool.getConnection(function(err, connection){

        var sql = 'select * from room_type where room_type_id = ?';
        //console.log(connection);
        connection.query(sql, [room_typeid],function (err, result) {
            if (err) {
                console.log("room_type_find Error: " + err.message);
                return;
            }

            connection.release();
            console.log(result);
            
            //connection.release();
            callback(err,result);                     
        });
        });        
    };