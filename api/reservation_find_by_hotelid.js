var pool = require('./index').pool;

module.exports = function (hotelid, status, callback) {
		pool.getConnection(function(err, connection){

        var sql = 'select * from(room_type natural join reservation natural join hotel)'+
            ' where room_type_id = room_type_room_type_id and hotel_id = hotel_hotel_id'+
            ' and hotel_hotel_id = ? and reser_status = ?';
        if(status == "all")
            sql = 'select * from(room_type natural join reservation natural join hotel)'+
            ' where room_type_id = room_type_room_type_id and hotel_id = hotel_hotel_id'+
            ' and hotel_hotel_id = ? ';
        else if(status == 'Confirmed')
            sql = 'select * from(room_type natural join reservation natural join hotel)'+
            ' where room_type_id = room_type_room_type_id and hotel_id = hotel_hotel_id'+
            ' and hotel_hotel_id = ? and reser_status = ? order by reser_begin';
        else if(status == 'Check-in')
            sql = 'select * from(room_type natural join reservation natural join hotel)'+
            ' where room_type_id = room_type_room_type_id and hotel_id = hotel_hotel_id'+
            ' and hotel_hotel_id = ? and reser_status = ? order by reser_end';

        //console.log(connection);
        connection.query(sql, [hotelid, status],function (err, result) {
            if (err) {
                console.log("reservation_find_by_hotelid Error : " + err.message);
                return;
            }
            connection.release();
            //console.log(hotelid);
            //console.log(ans);
            
            //connection.release();
            console.log(result);
            callback(err,result);                     
        });
        });        
    };