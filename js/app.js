$(document).ready(function(){
  /*total static, data per game, running state of the game*/


  /*Total Static*/
  var correctIcon = "correct.png";
  var wrongIcon = "wrong.png";

  /* Data per Game, including Logo, 3 Options and Correct Answer */
   gameData = {
     logo1: {
       logo: "1.png",
       options: ["Samsung", "IBM", "Intel"],
       answer: "3"
     },
     logo2: {
       logo: "2.png",
       options: ["Sony", "Nikon", "Canon"],
       answer: "2"
     },
   };
   /*States*/
   var currentLogo = 1;
   var correctAnswer = 0;

   var option1 = document.getElementById('option1');
   var option2 = document.getElementById('option2');
   var option3 = document.getElementById('option3');
   var brandLogo = document.getElementById('brand-Logo');

   var allOptions = document.getElementsByName('rb');


     var currentQuestion = gameData["logo"+ currentLogo];
     console.log(currentQuestion);

     function checkAnswer(){
       var userPick;
       var answer = currentQuestion.answer;
       console.log(answer);

       for(var i = 0; i < allOptions.length; i++){
         console.log(allOptions[i]);
       }
     }

     checkAnswer();


     function displayLogo(){
       brandLogo.src ="assets/" + gameData.logo1.logo;
     }
     displayLogo();

     function displayOptions(){
       option1.innerHTML = gameData.logo1.options[0];
       option2.innerHTML = gameData.logo1.options[1];
       option3.innerHTML = gameData.logo1.options[2];
     }
     displayOptions();

     document.addEventListener('click', function(){


     });



});
