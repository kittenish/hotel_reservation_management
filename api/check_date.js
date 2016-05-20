
var pool = require('./index').pool;

module.exports = function (arrival, leave, roomtypeid, callback) {

	var self = this;
	self.total = 0, self.used = 0;

	pool.getConnection(function(err, connection){

        var sql = "select sum(reser_num_room) as usedroom from reservation where room_type_room_type_id = ?"+
            " and (reser_status = 'Payed' or reser_status = 'Check-in' or reser_status = 'Confirmed')"+
            " and ((reser_begin >= ? and reser_begin <= ?) or (reser_end <= ? and reser_end >= ?) "+
            " or (reser_begin <= ? and reser_end >= ?))";
        
         
        connection.query(sql, [roomtypeid, arrival, leave, leave, arrival, arrival, leave],function (err, result) {
            if (err) {
                console.log("check_date Error: " + err.message);
                return;
            }
         
            self.used = result[0].usedroom;                  
        });

        var sql = "select room_num from room_type where room_type_id = ?";

        connection.query(sql, [roomtypeid],function (err, result) {
            if (err) {
                console.log("check_date Error: " + err.message);
                return;
            }

            connection.release();
            self.total = result[0].room_num; 
            callback(err, (self.total - self.used));                     
        });

    });
};