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
var reservation_find_by_hotelid = require('./reservation_find_by_hotelid');
var confirm_reservation = require('./confirm_reservation');
var apply_refund_reservation = require('./apply_refund_reservation');
var refund_reservation = require('./refund_reservation');
var check_in_reservation = require('./check_in_reservation');
var check_out_reservation = require('./check_out_reservation');
var user_edit_profile = require('./user_edit_profile');
var hotel_edit_profile = require('./hotel_edit_profile');
var admin_login = require('./admin_login');
var hotel_room_status = require('./hotel_room_status');
var check_date = require('./check_date');
var reservation_find_by_reserid = require('./reservation_find_by_reserid');
var empty_room_find_by_roomtypeid = require('./empty_room_find_by_roomtypeid');
var check_out_reservation_table = require('./check_out_reservation_table');
var check_out_room = require('./check_out_room');
var change_price = require('./change_price');
var hotel_all = require('./hotel_all');
var hotel_find_by_status = require('./hotel_find_by_status');
var hotel_set_status = require('./hotel_set_status');
var calculate_price = require('./calculate_price');
var reservation_find_all = require('./reservation_find_all');
var reservation_search_by_reserid_userid = require('./reservation_search_by_reserid_userid');
var room_type_in_hotel = require('./room_type_in_hotel');

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
exports.reservation_find_by_hotelid = reservation_find_by_hotelid;
exports.confirm_reservation = confirm_reservation;
exports.apply_refund_reservation = apply_refund_reservation;
exports.refund_reservation = refund_reservation;
exports.check_in_reservation = check_in_reservation;
exports.check_out_reservation = check_out_reservation;
exports.user_edit_profile = user_edit_profile;
exports.hotel_edit_profile = hotel_edit_profile;
exports.admin_login = admin_login;
exports.hotel_room_status = hotel_room_status;
exports.check_date = check_date;
exports.reservation_find_by_reserid = reservation_find_by_reserid;
exports.empty_room_find_by_roomtypeid = empty_room_find_by_roomtypeid;
exports.check_out_reservation_table = check_out_reservation_table;
exports.check_out_room = check_out_room;
exports.change_price = change_price;
exports.hotel_all = hotel_all;
exports.hotel_find_by_status = hotel_find_by_status;
exports.hotel_set_status = hotel_set_status;
exports.calculate_price = calculate_price;
exports.reservation_find_all = reservation_find_all;
exports.reservation_search_by_reserid_userid = reservation_search_by_reserid_userid;
exports.room_type_in_hotel = room_type_in_hotel;
