var pool = require('./index').pool;

module.exports = function (search, callback) {
		pool.getConnection(function(err, connection){
        console.log(search);
        search_value = [];
        var search_city = "?",
            search_wifi = "?",
            search_ci = "?",
            search_hotelname = "?";
        
        if(search.city == "All")
            search_city = "hotel_city";
        else
            search_value.push(search.city);
        
        if(search.wifi == "All")
            search_wifi = "room_wifi";
        else 
            search_value.push(search.wifi);
        
        if(search.ci == "All")
            search_ci = "room_cigarette"; 
        else 
            search_value.push(search.ci);
        
        if(search.hotelname == '')
            search_hotelname = "hotel_name";
        else
            search_value.push(search.hotelname)
        
        if(search.price_min == '') {
            search.price_min = 0;
            search_value.push(search.price_min);
        }
        else {
            var i = parseInt(search.price_min);
            console.log(i);
            search_value.push(i);
        }

        if(search.price_max == ''){
            search.price_max = 99999999;
            search_value.push(search.price_max);
        }
        else {
            var i = parseInt(search.price_max);
            search_value.push(i);
        }

        var sql = 'select * from(room_type natural join hotel)'+
            'where hotel_hotel_id = hotel_id and hotel_city ='+search_city+
            ' and room_wifi ='+search_wifi+
            ' and room_cigarette ='+search_ci+
            ' and hotel_name = '+search_hotelname+
            ' and room_price >= ? and room_price <= ?'+
            ';';
        
        //console.log(search.city);
        connection.query(sql, search_value,function (err, result) {
            if (err) {
                console.log("user_search_hotel Error: " + err.message);
                return;
            }

            connection.release();
            console.log(result);
            
            //connection.release();
            callback(err,result);                     
        });
        });        
    };