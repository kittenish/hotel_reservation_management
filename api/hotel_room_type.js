var pool = require('./index').pool;
var querystring = require('querystring');

module.exports = function (hotelid, arrival, callback) {
		pool.getConnection(function(err, connection){
        var self = this;
        self.room = [];
        self.price = [];
        var sql = 'select * from room_type join hotel where hotel_hotel_id = ? and hotel_id = hotel_hotel_id';
        //console.log(connection);
        connection.query(sql, [hotelid],function (err, result) {
            if (err) {
                console.log("Hotel_room_type Error: " + err.message);
                return;
            }
            //console.log(result);
            //price = result;
            result = JSON.stringify(result);
            result = JSON.parse(result);
            self.room = result;
            //console.log(self.room);
            //connection.release();
            //callback(err,result);                     
        });

        //console.log(self.room);
        sql = 'select * from price where date = ? and hotel_id = ?';
        connection.query(sql, [arrival, hotelid], function(err, result){
            if (err) {
                console.log("Find price Error: " + err.message);
                return;
            }

            result = JSON.stringify(result);
            result = JSON.parse(result);
            //console.log(result);
            self.price = result;
            //console.log(self.price);
            var i = 0, j = 0;
        for(i = 0;i < self.room.length; i++)
        {
            for(j = 0;j < self.price.length; j++)
            {
                if(self.room[i].room_type_id == self.price[j].room_type_id)
                {
                    self.room[i].room_price = "SPECIAL DAY " + self.price[j].price.toString();
                }
            }
            
        }
        //console.log(self.room);
        
            connection.release();
            callback(err, self.room);
        });

        //console.log(self.price);

        

        });        
    };