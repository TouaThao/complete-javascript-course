/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
//First we need to create player score
//hold gobalScore
//
let playerScore, gobalScore, activePlayer, gamePlaying,lastDice;
gameStart()


//control which player and the current roll of the player
// document.querySelector('#current-' + activePlayer).textContent = dice;

//control the css on the dice to hide
// document.querySelector('.dice').style.display = 'none';

//This will control the event handler of the button when we click on the Roll Dice
// And we pass a function and a click event to this
// function buttonDice(){

// }
// buttonDice()
//this is an example of a call back function. It will call another function for us
// document.querySelector('.btn-roll').addEventListener('click',buttonDice)
/*This is an example of an anonymous function
document.querySelector('.btn-roll').addEventListener('click',function(){
    do something 
})
reason why we're going to use it because it won't be call else where and it won't be reuse
*/
document.querySelector('.btn-roll').addEventListener('click', function () {
    //Do a If statement to check if game is still playing.
    //This will stop the game once we have a winner
    if (gamePlaying) {
        //when they click on the button we need to generate a random number
        let dice = Math.floor(Math.random() * 6) + 1;
        //display the result
        let diceDom = document.querySelector('.dice')
        let diceDom2 = document.querySelector('.dice2')
        diceDom.style.display = 'block ';
        diceDom.src = 'dice-' + dice + '.png';
        diceDom2.style.display = 'block ';
        diceDom2.src = 'dice-' + dice + '.png';
        //update the score only if it's not equal to one
        if (dice === 6 && lastDice === 6) {
             //player lose score
             playerScore[activePlayer]= 0;
             document.querySelector('#score-' + activePlayer).textContent = '0'
             nextPlayer();
        } else if (dice !== 1) {
            //add score
            playerScore += dice
            document.querySelector('#current-' + activePlayer).textContent = playerScore;
        } else {
            nextPlayer()
        }
        lastDice = dice;
    }


})


//add an event handler for hold button
document.querySelector('.btn-hold').addEventListener('click', function () {
    if (gamePlaying) {

        //Add playerscore to gobal score
        gobalScore[activePlayer] += playerScore;
        //update user score on the HTML page
        document.querySelector('#score-' + activePlayer).textContent = gobalScore[activePlayer]
        //Check if the player won the game 

        //this have to now check how much score we need to set to win the game
        let input = document.querySelector('.input').value;
        let winningScore;
        if (input) {
            winningScore = input;
        } else{
            winningScore = 100;
        }
        if (gobalScore[activePlayer] >= winningScore) {
            document.getElementById('name-' + activePlayer).textContent = 'Winner';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner')
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active')
            gamePlaying = false;
        } else {
            //End turn and pass it to other player 
            nextPlayer()

        }
    }




})

function nextPlayer() {
    //end player turn
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0
    playerScore = 0
    document.getElementById('current-0').textContent = '0'
    document.getElementById('current-1').textContent = '0'
    //use toggle to know when to switch back and forth
    document.querySelector('.player-0-panel').classList.toggle('active')
    document.querySelector('.player-1-panel').classList.toggle('active')
    //reference material
    // document.querySelector('.player-0-panel').classList.remove('active')
    // document.querySelector('.player-1-panel').classList.add('active')

    //No we need to hide the display of player 1 once he get 1
    document.querySelector('.dice').style.display = 'none';
}

//Now we need to implantment a new game
//Event listener
document.querySelector('.btn-new').addEventListener('click', gameStart)

function gameStart() {
    gobalScore = [0, 0]
    playerScore = 0;
    activePlayer = 0;
    gamePlaying = true;
    document.getElementById('current-0').textContent = '0'
    document.getElementById('current-1').textContent = '0'
    document.getElementById('score-0').textContent = '0'
    document.getElementById('score-1').textContent = '0'
    document.getElementById('name-0').textContent = 'Player1';
    document.getElementById('name-1').textContent = 'Player2';
    document.querySelector('.player-0-panel').classList.remove('winner')
    document.querySelector('.player-1-panel').classList.remove('winner')
    document.querySelector('.player-0-panel').classList.remove('active')
    document.querySelector('.player-1-panel').classList.remove('active')
    document.querySelector('.player-0-panel').classList.add('active')
}

//fix and add two button
//if they have both 6 in a row then they lose all score
// to change the final score 