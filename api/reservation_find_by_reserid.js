var pool = require('./index').pool;

module.exports = function (reserid, callback) {
		pool.getConnection(function(err, connection){

        var sql = 'select * from reservation where reser_id = ?';
            
        //console.log(connection);
        connection.query(sql, [reserid],function (err, result) {
            if (err) {
                console.log("roomtype_find_by_reserid Error: " + err.message);
                return;
            }

            connection.release();
            //console.log(result);
            
            //connection.release();
            callback(err,result);                     
        });
        });        
    };