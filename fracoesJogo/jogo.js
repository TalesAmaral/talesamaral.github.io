var timer = false;
var audioVitoria = new Audio('acerto.ogg');
var audioFim = new Audio('fim.ogg');
function startTimer(duration, display) {
	timer = duration, minutes, seconds;
	var intervalId = setInterval(function () {
		minutes = parseInt(timer / 60, 10)
		seconds = parseInt(timer % 60, 10);

		minutes = minutes < 10 ? "0" + minutes : minutes;
		seconds = seconds < 10 ? "0" + seconds : seconds;

		display.textContent = minutes + ":" + seconds;

		if (--timer < 0) {
			timer = duration;
		}
		if (minutes ==0 && seconds ==0 ){
			timer = false;
			clearInterval(intervalId);
			audioFim.pause() // important!!!
			audioFim.currentTime = 0
			audioFim.play()

		}
	}, 1000);

}

window.onload = function () {
	var count = 60 * 1,
		display = document.querySelector('#time');
	minutes = parseInt(count / 60, 10)
	seconds = parseInt(count % 60, 10);

	minutes = minutes < 10 ? "0" + minutes : minutes;
	seconds = seconds < 10 ? "0" + seconds : seconds;

	display.textContent = minutes + ":" + seconds;
	startFraction();


};
function handleFraction(bol) {
	if (timer ==false){
		console.log(timer)
		var count = 60 *1,
			display = document.querySelector('#time');
		startTimer(count, display);
		document.querySelector('#pontuacao').textContent = 0;

	}
	const fractionDiv = document.querySelector('.fraction');
	const fractionDivPlayer = document.querySelector('.fractionPlayer');
	num = fractionDiv.querySelector('.numerator').textContent;
	dem = fractionDiv.querySelector('.denominator').textContent;
	numPlayer = fractionDivPlayer.querySelector('.numerator').textContent;
	demPlayer = fractionDivPlayer.querySelector('.denominator').textContent;
	fractionDiv.querySelector('.numerator').textContent = numPlayer;
	fractionDiv.querySelector('.denominator').textContent = demPlayer;
	var [ numerator, denominator]  = createRandomFraction(12);
	fractionDivPlayer.querySelector('.numerator').textContent = numerator;
	fractionDivPlayer.querySelector('.denominator').textContent = denominator;


	val = num*demPlayer - numPlayer*dem;
	if (val < 0){
		bolJogo = 0;
	}else if (val ==0){
		bolJogo = 1;
	}else{
		bolJogo = 2;
	}
	if (bolJogo == bol){
		document.querySelector('#pontuacao').textContent++;
		audioVitoria.pause() // important!!!
		audioVitoria.currentTime = 0
		audioVitoria.play()
	}else{
		document.querySelector('#pontuacao').textContent = Math.abs( document.querySelector('#pontuacao').textContent - 1) ;
	}
}
function createRandomFraction(val) {
	const numerator = Math.floor(Math.random() * val) + 1; // Generates a random numerator between 1 and val
	const denominator = Math.floor(Math.random() * val) + 1; // Generates a random denominator between 1 and val
	return [numerator, denominator]

}
function startFraction(){
	var [ numerator, denominator]  = createRandomFraction(12);
	const fractionDiv = document.querySelector('.fraction');
	fractionDiv.querySelector('.numerator').textContent = numerator;
	fractionDiv.querySelector('.denominator').textContent = denominator;
	[ numerator, denominator]  = createRandomFraction(12);
	const fractionDivPlayer = document.querySelector('.fractionPlayer');
	fractionDivPlayer.querySelector('.numerator').textContent = numerator;
	fractionDivPlayer.querySelector('.denominator').textContent = denominator;
}
