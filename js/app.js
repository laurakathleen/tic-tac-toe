// wait for the DOM to finish loading
var box = $('.box');
var x = $('x');
var o =  $('o');
var resetBtn = $('.reset-btn');
var row = $('.row');
var clickCounter = 0;
var oneTurn = $('#player1-turn');
var twoTurn = $('#player2-turn');

$(document).ready(function() {
//Keeps track of if an odd turn (player 1) or even turn (player 2)
	$(box).on('click', function countEm(){
		//for (var i = 0; i<=9; i++){
		clickCounter +=1;
		console.log(clickCounter);
		return clickCounter;
	})
//at 0 turns, say 'player 1, go':
		if (clickCounter == 0 || clickCounter % 2 != 0) {
			$(oneTurn).css('visibility', 'visible');
			$(twoTurn).css('visibility', 'hidden');
		} else {
			$(twoTurn).css('visibility', 'visible');
			$(oneTurn).css('visibility', 'hidden');
		}
//Add the 'x' for player 1's turn
		$(box).on('click', function xTurn(){
		$(this).append('<p>X</p>');
  		})
//Reset button
  		$(resetBtn).on('click', function emptyGrid(){
  			$(box).empty();
  		})
 })