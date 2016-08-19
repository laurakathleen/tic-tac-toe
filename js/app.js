// wait for the DOM to finish loading
var box = $('.box');
var x = $('x');
var o =  $('o');
var resetBtn = $('.reset-btn');

$(document).ready(function() {
// all code to manipulate the DOM
// goes inside this function
	$(box).on('click', function xTurn(){
		$(this).append('<p>X</p>');
	})

  	$(resetBtn).on('click', function emptyGrid(){
  		$(box).empty();
  	})


});
