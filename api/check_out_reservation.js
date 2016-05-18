var pool = require('./index').pool;

module.exports = function (reserid, callback) {
		pool.getConnection(function(err, connection){

        var sql = "update check_in set check_in_status = 'Check-out' where reser_id = ? ";

        connection.query(sql, [reserid],function (err, result) {
            if (err) {
                console.log("check_out_check_in_table Error: " + err.message);
                return;
            }

            console.log(result);
                      
        });

        var sql = "select room_info_id from check_in where reser_id = ? ";
            
        //console.log(connection);
        connection.query(sql, [reserid],function (err, result) {
            if (err) {
                console.log("check_out_reservation Error: " + err.message);
                return;
            }

            connection.release();
            //console.log(result);
            
            //connection.release();
            callback(err,result);                     
        });
        });        
    };