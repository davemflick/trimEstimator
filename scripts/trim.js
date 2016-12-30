$(document).ready(function(){

function loadList(){
	var $roomList = $('#roomList');
	var $wallList = $('#wallList')
	var roomNumber = $('#roomNum').val();
	var trimOptions = $('#trimOptions').val();


 function writeList(roomNumber){
 $roomList.append('<li>Room</li>')
 }
return false;
}

$('#initial-form').submit(writeList);
}; 