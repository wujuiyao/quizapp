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
     },{
       logo: "3.png",
       options: ["Autodesk", "Adobe", "ABC"],
       correct: "2"
     },{

     }];

   /*States*/
   var correctAnswer = 0;
   var currentLogo = 0;
   var answer = gameData[currentLogo].correct;
   console.log("Correct Answer is " + answer);
   var click = document.getElementById('click');
   click.style.visibility = 'hidden';



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
   function checkAnswer(){

     var userPick, radios = document.getElementsByName("rb");
     var list = document.getElementsByClassName('question');

     //check if radio has been checked
     for (var i = 0; i < radios.length; i++) {
      if (radios[i].checked) {
        userPick = radios[i].value;
        console.log(userPick);
      }
     }

     var response =  document.getElementById('response');
     var answer = document.getElementById('answer');

     if (userPick == gameData[currentLogo].correct) {
      response.style.backgroundColor = '#d8fee2';
      answer.innerHTML = 'Correct';
      answer.style.color = "rgb(22, 203, 0)";
      click.style.visibility = 'visible';
      list[currentLogo].src = 'assets/correct.png';
    }else{
      response.style.backgroundColor = '#FFB5B5';
      answer.innerHTML = 'Wrong';
      answer.style.color = 'rgb(255, 40, 40)';
      click.style.visibility = 'visible';
      list[currentLogo].src = 'assets/wrong.png';
    }
   }


   // Events
   rb1.addEventListener('click', checkAnswer, false);
   rb2.addEventListener('click', checkAnswer, false);
   rb3.addEventListener('click', checkAnswer, false);
   restart.addEventListener();

});
