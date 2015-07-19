$(document).ready(function(){
  /* Game Datas */
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
       logo: "4.png",
       options: ["Lamborghini", "Ferrari", "Bugatti"],
       correct: "1"
     },{
       logo: "5.png",
       options: ["Burberry", "Ralph Lauren", "Abercrombie & Fitch"],
       correct: "2"
     },{
       logo: "6.png",
       options: ["Chanel", "V&A Museum", "Playstation"],
       correct: "3"
     }];

   /*Total Static*/
   var restart = document.getElementById('restart');
   var rb1 = document.getElementById('one');
   var rb2 = document.getElementById('two');
   var rb3 = document.getElementById('three');
   var correctIcon = "correct.png";
   var wrongIcon = "wrong.png";

   /*Initial var states*/
   var currentLogo = 0; //index
   var correctAnswer = gameData[currentLogo].correct; // variable for the correct Answer
   console.log("Correct Answer is " + correctAnswer);
   var click = document.getElementById('click');
       click.style.visibility = 'hidden'; // make the correct answer tick hidden
   var quizReady = true;


   /*Different Functions*/
   function displayLogo(){
     var brandLogo = document.getElementById('brand-Logo');
     brandLogo.src ="assets/" + gameData[currentLogo].logo;
     // brandLogo.src = "http://i1383.photobucket.com/albums/ah285/Wu_Jui_Yao/1_zps1kqmr73e.png";
   }
   displayLogo();

   function displayOptions(){
     var option1 = document.getElementById('option1');
     var option2 = document.getElementById('option2');
     var option3 = document.getElementById('option3');
     option1.innerHTML = gameData[currentLogo].options[0];
     option2.innerHTML = gameData[currentLogo].options[1];
     option3.innerHTML = gameData[currentLogo].options[2];
   }
   displayOptions();

   //Testing the correct answer
   function startQuiz(){
     var userPick, radios = document.getElementsByName("rb");
     var list = document.getElementsByClassName('question');
     var rightAnswer = document.getElementsByClassName('rightAnswer');
     var response =  document.getElementById('response');
     var answer = document.getElementById('answer');// where it explains correct or wrong

     if(quizReady){
         quizReady = false;
         //check if radio has been checked
         for (var i = 0; i < radios.length; i++) {
          if (radios[i].checked) {
            userPick = radios[i].value;
            console.log("Player chose " + userPick);
          }
        }

         if (userPick == correctAnswer) {
          rightAnswer[correctAnswer-1].style.visibility = 'visible';
          rightAnswer[correctAnswer-1].src = "assets/right.png";
          response.style.backgroundColor = '#d8fee2';
          answer.innerHTML = 'Correct';
          answer.style.color = "rgb(22, 203, 0)";
          answer.style.visibility = 'visible';
          click.style.visibility = 'visible';
          list[currentLogo].src = 'assets/correct.png';
        }else{
          rightAnswer[correctAnswer-1].style.visibility = 'visible';
          rightAnswer[correctAnswer-1].src = "assets/right.png";
          response.style.backgroundColor = '#FFB5B5';
          answer.innerHTML = 'Wrong';
          answer.style.color = 'rgb(255, 40, 40)';
          answer.style.visibility = 'visible';
          click.style.visibility = 'visible';
          list[currentLogo].src = 'assets/wrong.png';
        }

     }else{//move to the next logo
       console.log('Player clicked, changed to next Logo');
       quizReady = true;
       //clear all the radio input
       for(var i = 0; i < radios.length; i++){
           radios[i].checked = false;
       }
       //clear the answer wordings
       answer.style.visibility = 'hidden';
       click.style.visibility = 'hidden';
       response.style.backgroundColor = '#fff';
       rightAnswer[correctAnswer-1].style.visibility = 'hidden';
       //Change to new Logo and new correct Answer
       if(currentLogo < gameData.length - 1){
         currentLogo++;
         correctAnswer = gameData[currentLogo].correct;
         displayLogo();
         displayOptions();
       }else{
         alert("You already finished the game, please restart!");
         quizReady = false;
       }
    }
    }

   /*All the Events*/
   document.body.addEventListener('click', startQuiz, false);
   restart.addEventListener('click', function(){

   });
});
