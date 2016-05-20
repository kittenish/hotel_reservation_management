var pool = require('./index').pool;

module.exports = function (rese_id) {
	
    pool.getConnection(function(err, connection){
        var sql = 'delete from reservation  where reser_id = ?';
        connection.query(sql, [rese_id],function (err, result) {
            if (err) {
                console.log("delete_reservation Error: " + err.message);
                return;
            }

            connection.release();
            console.log('Delete_reservation : ',rese_id);                   
        });
    });        
};