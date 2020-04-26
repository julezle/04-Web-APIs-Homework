// VARIABLES
// ==========================================================================

var score = 0;
var quoteIndex = 0;

var trivia =
{
  quote: ["'Inconceivable!'", "'Houston, we have a problem.'", "'Why are you dressed like somebody died?'", "'You’re gonna get killed chasing after your damn ‘fortune and glory’!'", "'Revenge is a dish that tastes best when served cold.'"
],
  movie: [
    ["Princess Bride", "The Count of Monte Cristo", "The Three Musketeers"],
    ["Intersteller", "The Martian", "Apollo 13"],
    ["Hocus Pocus", "Beetle Juice", "The Addams Family"],
    ["National Treasure", "The Goonies", "Indiana Jones"],
    ["Scarface", "The Godfather", "American Gangster"]
  ],
  answer: ["Princess Bride", "Apollo 13", "The Addams Family", "Indiana Jones", "The Godfather"]
};

// The object questions for our quiz game.


//================FUNCTIONS================//
var btn;
var btns;

function startGame(){
renderQuote();

}


function renderQuote() {
  document.querySelector("#startGame").style.visibility= "hidden";

  //emptying
  document.querySelector("#movie").innerHTML = "";
  if (quoteIndex <= (trivia.quote.length - 1)) {
    document.querySelector("#displayQuote").innerHTML = trivia.quote[quoteIndex];
    for (var i = 0; i < trivia.movie[quoteIndex].length; i++) {
      //  console.log(trivia.movie[quoteIndex][i]);
      btn = document.createElement("button");
      // var btn = document.querySelector("#buttons");
      btn.setAttribute("class", "userChoice");
      btn.setAttribute("value", trivia.movie[quoteIndex][i]);
      btn.textContent = trivia.movie[quoteIndex][i];
      document.querySelector("#movie").appendChild(btn);
      btn.onclick=checkAnswer;
    }
    // console.log(trivia.answer[quoteIndex]);
    document.querySelector("#answer").innerHTML = trivia.answer[quoteIndex];
    document.querySelector("#answer").style.visibility= "hidden";
  }
  // If there aren't, render the end game screen.
  else {
    document.querySelector("#displayQuote").innerHTML = "Game Over!";
    document.querySelector("#score").innerHTML = "Final Score: " + score + " out of " + trivia.quote.length;
  }
  btns = document.querySelectorAll(".userChoice");
};

 //quoteIndex++;
//renderQuote();

// Function that updates the score...
function updateScore() {
  document.querySelector("#score").innerHTML = "Score: " + score;
}

// document.addEventListener("onclick", function(userChoice){
//   document.getElementsByName("movie").innerHTML = "";
// });
// var button = trivia.movie;

// for (var any of btns) {
//   any.addEventListener("click", checkAnswer);
// console.log(btns);
// };

function checkAnswer() {
  //alert(this.value);
  var userChoice = this.value;
   console.log(  // console.log("user choice: " + userChoice)
   );
   console.log("index"+quoteIndex)
   console.log("user choice: " + userChoice)
   console.log("answer"+trivia.answer[quoteIndex])

   console.log(userChoice === trivia.answer[quoteIndex])

  // If they guess the correct answer, increase and update score, alert them they got it right.
  if (userChoice === trivia.answer[quoteIndex]) {
    alert("Correct!");
    score++;
    updateScore();
    //ADD TIME???????
  }
  // If wrong, alert them they are wrong.
  else {
    alert("Wrong!");
  }

//go to the next index
  quoteIndex++;
  //render out card

  renderQuote();
};


//Add input initials box & submit button
//Final score screen
//Text: You win!


//Timer: increment & decrement