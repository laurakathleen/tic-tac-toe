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
	$(box).on('click', function switchTurn(){
		if (clickCounter % 2 != 0) {
			player2 = true;
			$(twoTurn).css('visibility', 'visible');
			$(oneTurn).css('visibility', 'hidden');
			$(this).append('<p>X</p>');
			$(this).addClass('.claimed-box');
		} else if (clickCounter == 0 || clickCounter % 2 == 0) {
			player1=true;
			$(oneTurn).css('visibility', 'visible');
			$(twoTurn).css('visibility', 'hidden');	
			$(this).append('<p>O</p>');
			$(this).addClass('.claimed-box');
		}
	})
//Reset button & reset clickCounter to 0 so player1's turn
  		$(resetBtn).on('click', function emptyGrid(){
  			$(box).empty();
  			clickCounter = 0;
  			$(oneTurn).css('visibility', 'visible');
			$(twoTurn).css('visibility', 'hidden');
  		})
 })
