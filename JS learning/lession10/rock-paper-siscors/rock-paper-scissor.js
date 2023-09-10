let score=JSON.parse(localStorage.getItem('score'))
|| {
    wins: 0,
    losses: 0,
    ties: 0
};

updateScoreElement();

//insetead of writing below if statement we can use default OR operatore . used above
//  if(!score){
//    score={
//         wins:0,
//         losses:0,
//         ties:0
//    };
//  }


function playGame(playerMove){
let computerMove=pickComputerMove();
let result='';
if(playerMove==='scissors'){
if(computerMove==='rock'){
result='You lose.';

}
else if(computerMove==='paper'){
result='You win.';

}
else if(computerMove==='scissors'){
result='Tie.';

}
}

else if(playerMove==='paper'){
if(computerMove==='rock'){
result='You win.';
}
else if(computerMove==='paper'){
result='Tie.';
}
else if(computerMove==='scissors'){
result='You lose.';
}
}

else if(playerMove==='rock'){
if(computerMove==='rock'){
result='Tie.';
}
else if(computerMove==='paper'){
result='You lose.';
}
else if(computerMove==='scissors'){
result='You win.';
}
}

if(result==='You win.') score.wins++;
else if(result==='You lose.') score.losses++;
else if(result==='Tie.') score.ties++;

localStorage.setItem('score',JSON.stringify(score));
updateScoreElement();
document.querySelector('.js-result').innerHTML= result;
document.querySelector('.js-moves').innerHTML=`  You
<img class="move-icon" src="images/${playerMove}-emoji.png" alt="rock-emoji">
<img class="move-icon" src="images/${computerMove}-emoji.png" alt="paper-emoji">
Computer`;

}

function pickComputerMove(){
let computerMove='';
const randomNumber=Math.random();

if(randomNumber>=0 && randomNumber<1/3){
computerMove='rock';

}
else if(randomNumber>=1/3 && randomNumber<2/3){
computerMove='paper';
}
else if(randomNumber>=2/3 && randomNumber<1){
computerMove='scissors';
}
return computerMove;
}


function updateScoreElement(){
document.querySelector('.js-score')
.innerHTML=`wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;

const jsScore=document.querySelector('.js-score');

console.log(jsScore.classList.contains('score'));

}