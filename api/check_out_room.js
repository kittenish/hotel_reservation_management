var pool = require('./index').pool;

module.exports = function (room) {
	pool.getConnection(function(err, connection){

        var sql1 = "update room_info set room_status = 'Empty'  where room_info_id = ?";
        var sql2 = "update room_info set room_customer = ''  where room_info_id = ?";
        var i = 0;

        for(i = 0 ;i < room.length; i++){
            var s = room[i].room_info_id;
            console.log(s);
            connection.query(sql1, [s],function (err, result) {
                if (err) {
                    console.log("check_out_room Error: " + err.message);
                    return;
                }     
            });
            connection.query(sql2, [s],function (err, result) {
                if (err) {
                    console.log("check_out_room Error: " + err.message);
                    return;
                }
                console.log('check_out_room : ',s);               
            });           
        }
        connection.release();
    });       
};