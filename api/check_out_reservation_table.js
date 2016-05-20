var pool = require('./index').pool;

module.exports = function (rese_id) {
	pool.getConnection(function(err, connection){

        var sql = 'update reservation set reser_status = "Complete"  where reser_id = ?';
        connection.query(sql, [rese_id],function (err, result) {
            if (err) {
                console.log("check_out_reservation_table Error: " + err.message);
                return;
            }

            connection.release();
            console.log('check_out_reservation_table : ',rese_id);                   
        });
    });        
};