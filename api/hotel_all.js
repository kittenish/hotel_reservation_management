var pool = require('./index').pool;

module.exports = function (callback) {
	
    pool.getConnection(function(err, connection){

        var sql = 'select * from hotel ';
        connection.query(sql, function (err, result) {
            if (err) {
                console.log("Hotel_find Error: " + err.message);
                return;
            }

            connection.release();
            callback(err,result);                     
        });
    });        
};