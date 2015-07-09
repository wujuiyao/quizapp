$(document).ready(function(){

  /*total static, data per game, running state of the game*/

  /*Total Static*/
  var restart = document.getElementById('restart');
  var rb1 = document.getElementById('one');
  var rb2 = document.getElementById('two');
  var rb3 = document.getElementById('three');
  var correctIcon = "correct.png";
  var wrongIcon = "wrong.png";

  /* Data per Game, including Logo, 3 Options and Correct Answer */
  var gameData = [{
       logo: "1.png",
       options: ["Samsung", "IBM", "Intel"],
       correct: "3"
     },{
       logo: "2.png",
       options: ["Sony", "Nikon", "Canon"],
       correct: "2"
   }];

   /*States*/
   var currentLogo = 0;
   var correctAnswer = 0;


   /*Functions*/

   function displayLogo(){
     var brandLogo = document.getElementById('brand-Logo');
     brandLogo.src ="assets/" + gameData[0].logo;
   }
   displayLogo();

   function displayOptions(){
     var option1 = document.getElementById('option1');
     var option2 = document.getElementById('option2');
     var option3 = document.getElementById('option3');
     option1.innerHTML = gameData[0].options[0];
     option2.innerHTML = gameData[0].options[1];
     option3.innerHTML = gameData[0].options[2];
   }
   displayOptions();

   //For teseting the correct answer
   var answer = gameData[currentLogo].correct;
   console.log(answer);
   //
   function checkAnswer(){
     var userPick, radios = document.getElementsByName("rb");

     //check if radio has been checked
     for (var i = 0; i < radios.length; i++) {
      if (radios[i].checked) {
        userPick = radios[i].value;
        console.log(userPick);
      }
     }
     //Compare userPick
     if (userPick == gameData[currentLogo].correct) {
       //keep wokring from here
     }
   }

   // Events
   rb1.addEventListener('click', checkAnswer, false);
   rb2.addEventListener('click', checkAnswer, false);
   rb3.addEventListener('click', checkAnswer, false);
   restart.addEventListener();

});
