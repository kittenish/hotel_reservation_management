var pool = require('./index').pool;
var querystring = require('querystring');



module.exports = function(type_id, price, num, info, area, bed, type, standard, wifi, cigarette, hotel_id, img) {
    pool.getConnection(function(err, connection){
        //console.log(img);
        var sql = 'insert into room_type(room_type_id, room_price, room_num, room_area, room_bed, room_type_name, room_standard, room_wifi, room_cigarette, hotel_hotel_id, room_img) values(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?) ';
        var room = [type_id, price, num, area, bed, type, standard, wifi, cigarette, hotel_id, img];
        connection.query(sql, room, function (err, result) {
            if (err) {
                console.log("add_room_type Error: " + err.message);
                return;
            }

            //connection.release();
            console.log('Insert into room_type : ' , result);
            //connection.release();                  
        });
    
        var result = querystring.parse(info, '/', ':');
        //console.log(result);
        var i = 1;
        var s = i.toString();
        while(result[s] != undefined)
        {
            //console.log(result[s]);

            var sql = 'insert into room_info(room_info_id, room_no, room_status, room_type_room_type_id, hotel_id, room_customer) values(?, ?, ?, ?, ?, ?)';
            var room = [ type_id + result[s], result[s], "Empty", type_id, hotel_id, ""];
            // 0 to respresent unoccupied
            connection.query(sql, room, function (err,result) {
                if (err) {
                    console.log("add_room_info Error: " + err.message);
                    return;
                }

                console.log('Insert into room_info : ' , result);
            });
            i += 1;
            s = i.toString();
        }
        connection.release();


        });       
}