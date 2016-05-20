var pool = require('./index').pool;

module.exports = function(username, password, tel, name, email) {
	
    pool.getConnection(function(err, connection){

   		var sql = 'insert into customer(customer_id, customer_password, customer_name, customer_tel, customer_email) values(?, ?, ?, ?, ?) ';
		var user = [username, password, name, tel, email];
        connection.query(sql, user, function (err, result) {
            if (err) {
                console.log("User_signup Error: " + err.message);
                return;
            }

            connection.release();
            console.log('Insert into customer : ' , result);        
        });
    });       
}