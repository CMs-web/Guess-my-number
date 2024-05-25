'use strict';

let secretNumber = Math.trunc(Math.random()*20)+1;

var score = 20;

var highScore= 0;


document.querySelector(".check").addEventListener('click', function(){


  const guess= Number(document.querySelector('.guess').value);

  if (!guess) {

    document.querySelector('.message').textContent = '🚫 No Number !'

  }else if(guess===secretNumber){


      document.querySelector('.number').textContent = secretNumber;
    
      document.querySelector('.message').textContent ='🥇 Currect Answer'
    
      document.querySelector('body').style.backgroundColor = "green"

      if(score>highScore){
        highScore=score;
        document.querySelector('.highscore').textContent = score;
      }

  }

  else if(guess!==secretNumber){
    // if(guess>secretNumber){
      score--
      document.querySelector('.score').textContent = score;
      document.querySelector('.message').textContent = '👀 You loose Game'
      document.querySelector('.message').textContent = guess>secretNumber ? '📈 Too High': '📈 Too low';
    }
  });                                                                                                                                                      
//   else if(guess>secretNumber){

//      if(score>0){

//          score--

//          document.querySelector('.score').textContent = score;

//          document.querySelector('.message').textContent ='📈 Too High';

//     }else{
//         document.querySelector('.message').textContent = '👀 You loose Game'
//     }

//   }else if(guess<secretNumber){

//     if(score>0){

//         score--
    
//         document.querySelector('.score').textContent = score;
    
//         document.querySelector('.message').textContent ='📈 Too low';
    
//         }else{
//             document.querySelector('.message').textContent = '👀 You loose Game'
//         }
// }});

document.querySelector('.again').addEventListener('click', function(){

  score=20;

  document.querySelector('.score').textContent = score;

  document.querySelector('.number').textContent = "?";

  document.querySelector('.message').textContent = 'Start Guessing...';

  document.querySelector('.guess').value='';

  document.querySelector('body').style.backgroundColor = "#222";



});





