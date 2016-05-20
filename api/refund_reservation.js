var pool = require('./index').pool;

module.exports = function (rese_id) {
	
    pool.getConnection(function(err, connection){

        var sql = 'update reservation set reser_status = "Refund"  where reser_id = ?';
        connection.query(sql, [rese_id],function (err, result) {
            if (err) {
                console.log("refund_reservation Error: " + err.message);
                return;
            }

            connection.release();
            console.log('refund_reservation : ',rese_id);                   
        });
    });        
};