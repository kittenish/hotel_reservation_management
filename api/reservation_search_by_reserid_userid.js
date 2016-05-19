var pool = require('./index').pool;

module.exports = function (reserid, userid, callback) {
	var search = [],
		search_userid = '?',
		search_reserid = '?';
	if(reserid == '')
            search_reserid = "reser_id";
        else
            search.push(reserid);

        if(userid == '')
        	search_userid = "customer_customer_id";
        else 
        	search.push(userid);

		pool.getConnection(function(err, connection){

        var sql = 'select * from(room_type natural join reservation natural join hotel)'+
            ' where room_type_id = room_type_room_type_id and hotel_id = hotel_hotel_id'+
            ' and reser_id = '+search_reserid+' and customer_customer_id = '+search_userid+
            ' order by reser_begin';
        
            
        console.log(sql);
        connection.query(sql, search ,function (err, result) {
            if (err) {
                console.log("reservation_find_by_reserid_userid Error: " + err.message);
                return;
            }

            connection.release();
            console.log(result);
            
            //connection.release();
            callback(err,result);                     
        });
        });        
    };