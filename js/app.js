// wait for the DOM to finish loading
var box = $('.box');
var x = $('X');
var o =  $('O');
var resetBtn = $('.reset-btn');
var row = $('.row');
var clickCounter = 0;
var xCounter = 0;
var oCounter = 0;
var oneTurn = $('#player1-turn');
var twoTurn = $('#player2-turn');
var player1;
var player2;

$(document).ready(function() {
	$(oneTurn).css('visibility', 'visible');
//Keeps track of if an odd turn (player 1) or even turn (player 2)
	$(box).on('click', function countEm(){
		for (var i = 0; i<=9; i++){
			clickCounter +=1;
			console.log(clickCounter);
			return clickCounter;
		} 
	})
//at 0 turns, say 'player 1, go':
	$(box).on('click', function switchTurn(){
		if (clickCounter % 2 != 0) {
			player2 = true;
			$(twoTurn).css('visibility', 'visible');
			$(oneTurn).css('visibility', 'hidden');
//Check for a claimed box:
			if ($(this).hasClass('.claimed-box')){
				alert("Pick a different box.");
			} else {
//Marks box with an X:				
				$(this).append('<p id="xMark">X</p>');
				$(this).addClass('.claimed-box-x');
				xCounter += 1;
				console.log("x= " + xCounter);
				winnerCheck(x, player1);
				tieChecker();
			}
//switch to player 2 turn:	
		} else if (clickCounter == 0 || clickCounter % 2 == 0) {
			player1=true;
			$(oneTurn).css('visibility', 'visible');
			$(twoTurn).css('visibility', 'hidden');
//Check for a claimed box:
			if ($(this).hasClass('.claimed-box')){
				alert("Pick a different box.");
			} else {
//Marks box with an O:		
				$(this).append('<p id="oMark">O</p>');
				$(this).addClass('.claimed-box-o');
				oCounter += 1;
				console.log("o= " + oCounter);
				winnerCheck(o, player2);
				tieChecker();
			}
		}
	})

	/*function winnerCheck() {	
		if ($('#box1').val() === $('#box2').val() && $('#box2').val() === $('#box3').val() || $('#box4').val() === $('#box5').val() && $('#box5').val() === $('#box6').val() || $('#box7').val() === $('#box8').val() && $('#box8').val() === $('#box9').val()){
			if ($('#box1').val() == 'X'){
				console.log("Player 1 wins X's!");
			} else if ($('#box1').val() == 'O'){
				console.log("Player 2 wins O's!");
			}
		}
	}
	*/
	function winnerCheck(n, player) {
		if ($('#box1').hasClass('.claimed-box-x') && $('#box2').hasClass('.claimed-box-x') && $('#box3').hasClass('.claimed-box-x') ||
		$('#box1').hasClass('.claimed-box-o') && $('#box2').hasClass('.claimed-box-o') && $('#box3').hasClass('.claimed-box-o') ||
		$('#box4').hasClass('.claimed-box-x') && $('#box5').hasClass('.claimed-box-x') && $('#box6').hasClass('.claimed-box-x') ||
		$('#box4').hasClass('.claimed-box-o') && $('#box5').hasClass('.claimed-box-o') && $('#box6').hasClass('.claimed-box-o') ||
		$('#box7').hasClass('.claimed-box-x') && $('#box8').hasClass('.claimed-box-x') && $('#box9').hasClass('.claimed-box-x') ||
		$('#box7').hasClass('.claimed-box-o') && $('#box8').hasClass('.claimed-box-o') && $('#box9').hasClass('.claimed-box-o') ||
		$('#box1').hasClass('.claimed-box-x') && $('#box4').hasClass('.claimed-box-x') && $('#box7').hasClass('.claimed-box-x') ||
		$('#box1').hasClass('.claimed-box-o') && $('#box4').hasClass('.claimed-box-o') && $('#box7').hasClass('.claimed-box-o') ||
		$('#box2').hasClass('.claimed-box-x') && $('#box5').hasClass('.claimed-box-x') && $('#box8').hasClass('.claimed-box-x') ||
		$('#box2').hasClass('.claimed-box-o') && $('#box5').hasClass('.claimed-box-o') && $('#box8').hasClass('.claimed-box-o') ||
		$('#box3').hasClass('.claimed-box-x') && $('#box6').hasClass('.claimed-box-x') && $('#box9').hasClass('.claimed-box-x') ||
		$('#box3').hasClass('.claimed-box-o') && $('#box6').hasClass('.claimed-box-o') && $('#box9').hasClass('.claimed-box-o') ||
		$('#box1').hasClass('.claimed-box-x') && $('#box5').hasClass('.claimed-box-x') && $('#box9').hasClass('.claimed-box-x') ||
		$('#box1').hasClass('.claimed-box-o') && $('#box5').hasClass('.claimed-box-o') && $('#box9').hasClass('.claimed-box-o') ||
		$('#box3').hasClass('.claimed-box-x') && $('#box5').hasClass('.claimed-box-x') && $('#box7').hasClass('.claimed-box-x') ||
		$('#box3').hasClass('.claimed-box-o') && $('#box5').hasClass('.claimed-box-o') && $('#box7').hasClass('.claimed-box-o')){
			console.log("Winner!");
			if (clickCounter == 0 || clickCounter % 2 == 0){
			$('#line').append("<h1 class='winner'>player 2 wins!</h1>");
			} else {
			$('#line').append("<h1 class='winner'>player 1 wins!</h1>");
			}
		}
	}

//Check for a tie:
	function tieChecker() {
		if (xCounter == 5 && oCounter ==4 && clickCounter ==0){
			alert("It's a tie! Play again.");
			emptyGrid();
		}
	}

//Reset button & reset clickCounter to 0 so player1's turn
  		$(resetBtn).on('click', function emptyGrid(){
  			$(box).empty();
  			clickCounter = 0;
  			$(oneTurn).css('visibility', 'visible');
			$(twoTurn).css('visibility', 'hidden');
			$('.box').removeClass('.claimed-box-x');
			$('.box').removeClass('.claimed-box-o');
			$('.winner').css('visibility', 'hidden');
  		})
 })