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

  /*Static Elements*/
  var correctIcon = "correct.png";
  var wrongIcon = "wrong.png";
  var userPick, radios = document.getElementsByName("rb");
  var list = document.getElementsByClassName('question');
  var rightAnswer = document.getElementsByClassName('rightAnswer');
  var response =  document.getElementById('response');
  var answer = document.getElementById('answer');

  /*Initial var states*/
  var currentLogo = 0; //index
  var correctAnswer = gameData[currentLogo].correct; // variable for the correct Answer
  console.log("Correct Answer is " + correctAnswer);
  var click = document.getElementById('click');
  click.style.visibility = 'hidden'; // make the correct answer tick hidden
  var quizReady = true;

  /*Function on Document Ready*/
  function displayLogo(){
    var brandLogo = document.getElementById('brand-Logo');
    brandLogo.src ="assets/" + gameData[currentLogo].logo;
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

  /*Events*/
  //Restart Game Event
  var restart = document.getElementById('restart');
  restart.addEventListener('click', restartGame, false);
  //Radio Buttons and Body Event
  var rb1 = document.getElementById('one');
  var rb2 = document.getElementById('two');
  var rb3 = document.getElementById('three');
  document.body.addEventListener('click',function(){
    if(rb1.checked === true || rb2.checked === true || rb3.checked === true){
      startQuiz();
    }
  });

  //Restart Game Function
  function restartGame(){
    console.log("Started a New Game");
    currentLogo = 0;
    displayLogo();
    displayOptions();
    correctAnswer = gameData[currentLogo].correct;
    console.log("Correct Answer is " + correctAnswer);
    click.style.visibility = 'hidden';
    quizReady = true;
    for(var i = 0; i < list.length; i ++){
      list[i].src = '';
    }
  }
  //Main Quiz Function
  function startQuiz(){
    if(quizReady){
      quizReady = false;
      //check if radio has been checked
      for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
        userPick = radios[i].value;
        console.log("Player chose " + userPick);
        }
      }
        //Testing and display the correct answer
        if (userPick === correctAnswer) {
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
        console.log('Player clicked, change to next Logo');
        //clear all the radio input
        for(var a = 0; a < radios.length; a++){
          radios[a].checked = false;
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
          quizReady = true; //back to quizReady
        }else{
          alert("You finished the game, please restart!");
          quizReady = false;
      }
    }
  }
});

// rb1.addEventListener('click', check);
// rb2.addEventListener('click', check);
// rb3.addEventListener('click', check);
// document.getElementById('browser').addEventListener('click', function(e){
//   alert('clicked');
// }, true);

/*Functions upon click event*/
//function to check which button or body clicked
// function check(){
//   if(rb1.checked === true){
//     startQuiz();
//   }else if(rb2.checked === true){
//     startQuiz();
//   }else if(rb3.checked === true){
//     startQuiz();
//   }
//
//   // for(var i = 0; i < radios.length; i++){
//   //   if(radios[i].checked){
//   //     startQuiz();
//   //     break;
//   //   }
//   // }
// }
