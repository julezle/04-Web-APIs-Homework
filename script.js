//================VARAIBLES================//

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

//================FUNCTIONS================//
var btn;
var btns;

document.querySelector("#submit").style.visibility= "hidden";
document.querySelector("#initials").style.visibility= "hidden";

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
      btn = document.createElement("button");
      btn.setAttribute("class", "userChoice");
      btn.setAttribute("value", trivia.movie[quoteIndex][i]);
      btn.textContent = trivia.movie[quoteIndex][i];
      document.querySelector("#movie").appendChild(btn);
      btn.onclick=checkAnswer;
    }
    document.querySelector("#answer").innerHTML = trivia.answer[quoteIndex];
    document.querySelector("#answer").style.visibility= "hidden";
  }
  else {
    document.querySelector("#displayQuote").innerHTML = "Game Over!";
    document.querySelector("#submit").style.visibility= "visible";
    document.querySelector("#initials").style.visibility= "visible";
    document.querySelector("#score").innerHTML = "Final Score: " + score + " out of " + trivia.quote.length;
  }
  btns = document.querySelectorAll(".userChoice");
};

// Function that updates the score...
function updateScore() {
  document.querySelector("#score").innerHTML = "Score: " + score;
}

function checkAnswer() {
  var userChoice = this.value;
    if (userChoice === trivia.answer[quoteIndex]) {
      alert("Correct!");
      score++;
      updateScore();
      // var finalScore = updateScore.value;
      // console.log(finalScore);
      //ADD TIME???????
    }
    else {
      alert("Wrong!");
    }

  quoteIndex++;
  renderQuote();
};

//==========================CODE BELOW IS NOT WORKING=========================//
//====================================NOTES===================================//

//Add input initials box & submit button
//Final score screen
//Text: You win!

const testKey = document.querySelector("#initials");
const testVal = score
const btnInsert = document.querySelector("#submit");
const output = document.querySelector("#scoreboard");
//figure out how to store value of score

var list = JSON.parse(localStorage.getItem("scoreList"));

if (!Array.isArray(list)) {
  list = [];
}

function scoreOnPage() {
  document.querySelector("#scoreboard").innerHTML.empty();
  var insideList = JSON.parse(localStorage.getItem("scoreList"));
  
    if (!Array.isArray(insideList)) {
      insideList = [];
    }

  btnInsert.onclick = function() {
    const player = initials.value;
    const finalScore = score.value;
      if (key && value) {
        localStorage.setItem(key, value);
        location.reload();
      }
  };
  for (var i = 0; i < localStorage.length; i++) {
    var x = x.text(insideList[i]);
    // const key = localStorage.key(i);
    // const value = localStorage.getItem(key);
  
    document.querySelector("#scoreboard").prepend();
    localStorage.setItem("scoreList", JSON.stringify(scoreList));
  }
  scoreOnPage();
};



//Timer: increment & decrement

//==================TIMER NOTES================================//


//       var timeEl = document.querySelector(".time");
// var mainEl = document.getElementById("main");

// var secondsLeft = 10;

// function setTime() {
//   var timerInterval = setInterval(function() {
//     secondsLeft--;
//     timeEl.textContent = secondsLeft + " seconds left until GAME OVER.";

//     if(secondsLeft === 0) {
//       clearInterval(timerInterval);
//       sendMessage();
//     }

//   }, 1000);
// }