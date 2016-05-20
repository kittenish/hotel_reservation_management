var pool = require('./index').pool;

function getDateDiff(date1,date2){
        
    var arr1=date1.split('-');
    var arr2=date2.split('-');
    var d1=new Date(arr1[0],arr1[1],arr1[2]);
    var d2=new Date(arr2[0],arr2[1],arr2[2]);
    return ((d2.getTime()-d1.getTime())/(1000*3600*24));
}

module.exports = function(arrival, leave, room_type, callback) {
    
    var self = this;
    self.total = 0;
	
    pool.getConnection(function(err, connection){
   	
    	var sql = "select room_price from room_type where room_type_id = ?";
        
        connection.query(sql, [room_type], function (err, result) {
            if (err) {
                console.log("calculate price Error: " + err.message);
                return;
            }
            console.log('calculate average price : ' , result);
            result = result[0].room_price;
            self.price = result;             
        });

        sql = 'select * from price where date >= ? and date <= ? and room_type_id = ?';
        connection.query(sql, [arrival, leave, room_type], function(err, result){
            if (err) {
                console.log("calculate price Error: " + err.message);
                return;
            }
            var day = getDateDiff(arrival, leave);
            console.log(day);
            self.total = self.price * day;
            if(result.length != 0)   
            { 
                result = JSON.stringify(result);
                result = JSON.parse(result);
                var i = 0;
                for(i = 0; i< result.length; i++){
                    self.total = self.total - (self.price - result[i].price);
                }
            }
        
            connection.release();
            callback(err, self.total);
        });
    });       
}