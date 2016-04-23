var mysql = require('mysql');

var pool  = mysql.createPool({
    host     : 'localhost',
    user     : 'root',
    password : '1126',
    database : 'hotel',
});

pool.on('connection', function(connection) {  
    console.log('[hotel connect]  succeed!');
}); 

exports.pool = pool; 


//module.exports = User;

var user_signup = require('./user_signup');
var user_find = require('./user_find');
var user_login = require('./user_login');
var hotel_signup = require('./hotel_signup');
var hotel_find = require('./hotel_find');
var hotel_login = require('./hotel_login');
var add_room = require('./add_room');
var room_type_find = require('./room_type_find');
var hotel_room_type = require('./hotel_room_type');
var hotel_all_room_type = require('./hotel_all_room_type');
var user_search_hotel = require('./user_search_hotel');
var add_reservation = require('./add_reservation');
var reservation_find_by_userid = require('./reservation_find_by_userid');
var pay_reservation = require('./pay_reservation');
var delete_reservation = require('./delete_reservation');

exports.user_signup = user_signup;
exports.user_find = user_find;
exports.user_login = user_login;
exports.hotel_signup = hotel_signup;
exports.hotel_find = hotel_find;
exports.hotel_login = hotel_login;
exports.add_room = add_room;
exports.room_type_find = room_type_find;
exports.hotel_room_type = hotel_room_type;
exports.hotel_all_room_type = hotel_all_room_type;
exports.user_search_hotel = user_search_hotel;
exports.add_reservation = add_reservation;
exports.reservation_find_by_userid = reservation_find_by_userid;
exports.pay_reservation = pay_reservation;
exports.delete_reservation = delete_reservation;