var pool = require('./index').pool;

module.exports = function (roomtypeid, callback) {
	
    pool.getConnection(function(err, connection){

        var sql = "select * from room_info where room_type_room_type_id = ? and room_status = 'Empty'";
        connection.query(sql, [roomtypeid],function (err, result) {
            if (err) {
                console.log("empty_room_find_by_roomtypeid Error: " + err.message);
                return;
            }

            connection.release();
            callback(err,result);                     
        });
    });        
};