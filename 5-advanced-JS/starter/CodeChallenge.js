/*
1)Build a game show quiz.
Built a function constructor call Question to describle a question. A question should include
a) the question it's self
b) the answer from which the player can choose the correct one
c) correct answer. it will have to take in a number

2) create a couple of questions using the constructor
3)store them all in an array
4)select on random question and console.log it on the console.
each question should have a number
5) use the prompt function to ask the user for the correct answer
6)check if the answer is correct. 
7)suppose this is a plugin for other programmer. So hide the function and make sure it doesn't interfere
with other code.
*/

//this contain our blue print that we could use
/*///////////////
Thought: so our Question constructor have all the question, answer in an array and the correct answer
but we need a way to show it on to the console log.
we could add a method to the question constructor. so all of them have access to it. But that not ideal
we want to type it to the Question prototype properity instead.
*////////////////

///now to hide our code. And to stop it from interfering with other programer
(function() {


let Question = function(gameQuestion,answerArray,correctQuestion) {
    this.gameQuestion = gameQuestion
    this.answerArray = answerArray
    this.correctQuestion = correctQuestion
    }
    
    //This is the question prototype
    Question.prototype.displayQuestion = function() {
        console.log(this.gameQuestion);
        //now we need to loop through the question cause some have 2 question or 3
        for (let i = 0; i < this.answerArray.length; i++) {
            console.log(i + ': ' +this.answerArray[i])
            
        }
    }
    
    //this question prototype would now need to check if the answer is corrected or not
    Question.prototype.checkAnswer = function (ans){
    if (ans === this.correctQuestion) {
        console.log('correct')
    } else{
        console.log('Try agian')
    }
    }
    
    
    //declare the new  question
    let question1 = new Question('what is my name', [
        'Toua','No'
        //this array will store all the possible answer to the question
    ],
    //this will contain the correct answer
    0
    )
    
    let question2 = new Question('what is the color of the sky?',[
        'red','blue'
    ],
    1
    )
    
    let question3 = new Question('how many wood could a woodchuck', [
        'one','none','many'
    ],
    2
    )
    
    //store the question in an array
    let questionArray = [ question1,question2,question3]
    //we create a randome selector. Then mutiply by our questionArray length
    let randomSelector = Math.floor(Math.random()* questionArray.length)
    //now we need to use randomselector on our array and use our displayQuestion from the 
    //prototype from above
    questionArray[randomSelector].displayQuestion()
    
    //now we need to use parseInt to change what they pick to a number
    let answerAsk =parseInt( prompt('Please select the correct answer'))
    
    questionArray[randomSelector].checkAnswer(answerAsk)
})();
