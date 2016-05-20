var pool = require('./index').pool;
var querystring = require('querystring');

module.exports = function (hotelid, arrival, callback) {
	
    pool.getConnection(function(err, connection){
        var self = this;
        self.room = [];
        self.price = [];
        var sql = 'select * from room_type join hotel where hotel_hotel_id = ? '+
            ' and hotel_id = hotel_hotel_id';
        connection.query(sql, [hotelid],function (err, result) {
            if (err) {
                console.log("Hotel_room_type Error: " + err.message);
                return;
            }
            result = JSON.stringify(result);
            result = JSON.parse(result);
            self.room = result;                    
        });

        sql = 'select * from price where date = ? and hotel_id = ?';
        connection.query(sql, [arrival, hotelid], function(err, result){
            if (err) {
                console.log("Find price Error: " + err.message);
                return;
            }

            result = JSON.stringify(result);
            result = JSON.parse(result);
            self.price = result;
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
        
            connection.release();
            callback(err, self.room);
        });

    });        
};