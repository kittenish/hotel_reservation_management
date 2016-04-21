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

exports.user_signup = user_signup;
exports.user_find = user_find;
exports.user_login = user_login;
exports.hotel_signup = hotel_signup;
exports.hotel_find = hotel_find;
exports.hotel_login = hotel_login;
exports.add_room = add_room;
exports.room_type_find = room_type_find;
exports.hotel_room_type = hotel_room_type;
