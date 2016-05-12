var pool = require('./index').pool;

module.exports = function (userid, password, tel, email, name) {
		pool.getConnection(function(err, connection){

        var sql = 'update customer set customer_password = ? , customer_tel = ? '+
        ' , customer_email =? , customer_name = ? where customer_id = ?';
        //console.log(connection);
        connection.query(sql, [password, tel, email, name, userid],function (err, result) {
            if (err) {
                console.log("User_edit_profile Error: " + err.message);
                return;
            }

            connection.release();
                             
        });
        });        
    };