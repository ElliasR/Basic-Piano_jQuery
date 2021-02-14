// var userClickedPattern = [];

// var buttonColours = ['red', 'blue', 'green', 'yellow'];

// var gamePattern = [];

// function nextSequence() {
//   userClickedPattern = [];
//   var randomNumber = Math.floor(Math.random() * 4);
//   var randomChosenColour = buttonColours[randomNumber];
//   gamePattern.push(randomChosenColour);
//   $('#' + randomChosenColour)
//     .fadeIn(100)
//     .fadeOut(100)
//     .fadeIn(100);
//   playSound(randomChosenColour);
//   var level = gamePattern.length - 1;
//   $('h1').text('Level ' + level);
// }

function playSound(name) {
  var audio = new Audio('sounds/' + name + '.mp3');
  audio.play();
}

$('.btn').click(function () {
  var pianoKey = this.id;
  //userClickedPattern.push(userChosenColour);
  //checkAnswer(userClickedPattern.length - 1);
  playSound(pianoKey);
  animatePress(pianoKey);
});

$(document).keypress(function (event) {
  var pressedKey = event.key;

  if (pressedKey == '`') {
    pianoKey = 'c4';
  } else if (pressedKey == '1') {
    pianoKey = 'd4';
  } else if (pressedKey == '2') {
    pianoKey = 'e4';
  } else if (pressedKey == '3') {
    pianoKey = 'f4';
  } else if (pressedKey == '4') {
    pianoKey = 'g4';
  } else if (pressedKey == '5') {
    pianoKey = 'a4';
  } else if (pressedKey == '6') {
    pianoKey = 'b4';
  } else if (pressedKey == '7') {
    pianoKey = 'c5';
  } else if (pressedKey == '8') {
    pianoKey = 'd5';
  } else if (pressedKey == '9') {
    pianoKey = 'e5';
  } else if (pressedKey == '0') {
    pianoKey = 'f5';
  } else if (pressedKey == '-') {
    pianoKey = 'g5';
  } else if (pressedKey == '=') {
    pianoKey = 'a5';
  } else if (pressedKey == ']') {
    pianoKey = 'b5';
  } else if (pressedKey == 'q' || pressedKey == 'Q') {
    pianoKey = 'c3';
  } else if (pressedKey == 'w' || pressedKey == 'W') {
    pianoKey = 'd3';
  } else if (pressedKey == 'e' || pressedKey == 'E') {
    pianoKey = 'e3';
  } else if (pressedKey == 'r' || pressedKey == 'R') {
    pianoKey = 'f3';
  } else if (pressedKey == 't' || pressedKey == 'T') {
    pianoKey = 'g3';
  } else if (pressedKey == 'y' || pressedKey == 'Y') {
    pianoKey = 'a3';
  } else if (pressedKey == 'u' || pressedKey == 'U') {
    pianoKey = 'b3';
  } else {
    pianoKey = '';
  }

  playSound(pianoKey);

  // playSound(userChosenColour);
  animatePress(pianoKey);
});

function animatePress(currentColour) {
  $('#' + currentColour).addClass('pressed');
  setTimeout(function () {
    $('#' + currentColour).removeClass('pressed');
  }, 50);
}

// var keyP = [];

// $(document).keypress(function (event) {
//   if (keyP.length == 0) {
//     keyP.push(event.key);
//     nextSequence();
//   }
// });

// function checkAnswer(currentLevel) {
//   if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
//     console.log('success');
//     if (userClickedPattern.length === gamePattern.length) {
//       setTimeout(function () {
//         nextSequence();
//       }, 1000);
//     }
//   } else {
//     playSound('wrong');
//     $('body').addClass('game-over');
//     setTimeout(function () {
//       $('body').removeClass('game-over');
//     }, 200);
//     $('h1').text('Game over, press A key to restart');
//     keyP = [];
//     gamePattern = [];
//   }
// }

//TESTING
//console.log(gamePattern[0]);
