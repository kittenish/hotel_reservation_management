var pool = require('./index').pool;

module.exports = function(arrival, leave, roomtypeid, userid, num, other_mates) {
	pool.getConnection(function(err, connection){
        var date = new Date();
        console.log(date);
        var res_id = date.getFullYear().toString() + (date.getMonth()+1).toString() + date.getDate().toString() + date.getHours().toString() + date.getMinutes().toString() + date.getSeconds().toString() + userid;
   		console.log(date.getMonth().toString());
        var sql = 'insert into reservation(reser_id, reser_status, reser_begin, reser_end, customer_customer_id, room_type_room_type_id, reser_num_room, other_mates) values(?, ?, ?, ?, ?, ?, ?, ?) ';
		var user = [res_id, "Unpayed",arrival, leave, userid, roomtypeid, num, other_mates];
        connection.query(sql, user, function (err, result) {
            if (err) {
                console.log("User_signup Error: " + err.message);
                return;
            }

            connection.release();
            console.log('Insert into reservation : ' , result);
            //connection.release();                  
        });
        });       
}