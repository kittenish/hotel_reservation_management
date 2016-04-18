var pool = require('./index').pool;

module.exports = function(hotelid, password, tel, name, email, addr, city, status, price, img) {
	pool.getConnection(function(err, connection){

   		var sql = 'insert into hotel(hotel_id, hotel_password, hotel_name, hotel_tel, hotel_email, hotel_city, hotel_addr, hotel_status, hotel_price, hotel_img) values(?, ?, ?, ?, ?, ?, ?, ?, ?, ?) ';
		var hotel = [hotelid, password, name, tel, email, city, addr, status, price, img];
        connection.query(sql, hotel, function (err, result) {
            if (err) {
                console.log("Hotel_signup Error: " + err.message);
                return;
            }

            connection.release();
            console.log('Insert into hotel : ' , result);
            //connection.release();                  
        });
        });       
}