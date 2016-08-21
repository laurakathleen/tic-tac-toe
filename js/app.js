// wait for the DOM to finish loading
var box = $('.box');
var x = $('x');
var o =  $('o');
var resetBtn = $('.reset-btn');
var row = $('.row');
var clickCounter = 0;
var oneTurn = $('#player1-turn');
var twoTurn = $('#player2-turn');
var player1;
var player2;

$(document).ready(function() {
	$(oneTurn).css('visibility', 'visible');
//Keeps track of if an odd turn (player 1) or even turn (player 2)
	$(box).on('click', function countEm(){
		//for (var i = 0; i<=9; i++){
		clickCounter +=1;
		console.log(clickCounter);
		return clickCounter;
	})
//at 0 turns, say 'player 1, go':
	function switchTurn(){
		if (clickCounter % 2 != 0) {
			player2;
			$(twoTurn).css('visibility', 'visible');
			$(oneTurn).css('visibility', 'hidden');
		} else if (clickCounter % 2 == 0) {
			player1=true;
			$(oneTurn).css('visibility', 'visible');
			$(twoTurn).css('visibility', 'hidden');	
		}
	}
//Add the 'x' for player 1's turn
	$(box).on('click', function xTurn(){
		$(this).append('<p>X</p>');
		$(this).addClass('.claimed-box');
		switchTurn();
	})
//Reset button
  		$(resetBtn).on('click', function emptyGrid(){
  			$(box).empty();
  			clickCounter = 0;
  			$(oneTurn).css('visibility', 'visible');
			$(twoTurn).css('visibility', 'hidden');
  		})
 })