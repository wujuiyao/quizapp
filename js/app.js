$(document).ready(function(){
  /*total static, data per game, running state of the game*/

  var option1 = document.getElementById('option1');
  var option2 = document.getElementById('option2');
  var option3 = document.getElementById('option3');
  var brandLogo = document.getElementById('brand-Logo');

  /*Total Static*/
  var correctIcon = "correct.png";
  var wrongIcon = "wrong.png";

  /*Data per Game*/
  var gameData = {
     logo_first:  {logo: "1.png",option1: "Samsung", option2: "IBM", option3: "Intel", answer: 3},
     logo_second: {logo: "2.png", options1: "Sony", option2: "Nikon", option3: "Canon", answer: 2 }
   };

   gameData.displayLogo = function(){
     brandLogo.src ="assets/" + gameData.logo_first.logo;
   };
   gameData.displayLogo();

   gameData.displayOptions = function(){
     option1.innerHTML = gameData.logo_first.option1;
     option2.innerHTML = gameData.logo_first.option2;
     option3.innerHTML = gameData.logo_first.option3;
   };
   gameData.displayOptions();

   gameData.verify = function(){

   };

});
