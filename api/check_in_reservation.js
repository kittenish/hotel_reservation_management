var pool = require('./index').pool;
var querystring = require('querystring');

module.exports = function (reservation, room_info, hotelid) {
	pool.getConnection(function(err, connection){

        var sql = 'update reservation set reser_status = "Check-in"  where reser_id = ?';

        connection.query(sql, [reservation.reser_id],function (err, result) {
            if (err) {
                console.log("update_check_in_reservation Error: " + err.message);
                return;
            }
            console.log('update_check_in_reservation : ',reservation.reser_id);                   
        });

        var mates = querystring.parse(reservation.other_mates, '/', ':');
        var i = 1;
        var s = i.toString();
        var j = 0;
        while(mates[s] != undefined)
        {
            sql = 'insert into check_in(check_in_id, check_in_status, hotel_hotel_id, reser_id, room_info_id, check_in_customer) values (?, ?, ?, ?, ?, ?)';
            connection.query(sql, [reservation.reser_id + mates[s], "Check-in", hotelid, reservation.reser_id, room_info[j].room_info_id, mates[s]],function (err, result) {
                if (err) {
                    console.log("insert_into_check-in_reservation Error: " + err.message);
                    return;
                }
                console.log('insert_into_check-in_reservation: ',reservation.reser_id);                   
            });
            
            sql = "update room_info set  room_status = 'Full'  where room_info_id = ?";
            connection.query(sql, [ room_info[j].room_info_id],function (err, result) {
                if (err) {
                    console.log("update_room_info Error: " + err.message);
                    return;
                }
                console.log('update_room_info: ',reservation.reser_id);                   
            });

            sql = "update room_info set check_in_id = ?  where room_info_id = ?";
            connection.query(sql, [reservation.reser_id + mates[s], room_info[j].room_info_id],function (err, result) {
                if (err) {
                    console.log("update_room_info Error: " + err.message);
                    return;
                }
                console.log('update_room_info: ',reservation.reser_id);                   
            });

            sql = "update room_info set room_customer = ?  where room_info_id = ?";
            connection.query(sql, [mates[s], room_info[j].room_info_id],function (err, result) {
                if (err) {
                    console.log("update_room_info Error: " + err.message);
                    return;
                }
                console.log('update_room_info: ',reservation.reser_id);                   
            });

            j++;
            i++;
            s = i.toString();
        }
        
    });        
};