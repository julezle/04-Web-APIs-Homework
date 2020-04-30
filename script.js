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
var userArray= JSON.parse(localStorage.getItem("scoreList"));

if (!Array.isArray(userArray)) {
  userArray = [];
}

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
    gameOver();
  }
  btns = document.querySelectorAll(".userChoice");
};

function gameOver(){
  document.querySelector("#displayQuote").innerHTML = "Game Over!";
  document.querySelector("#submit").style.visibility= "visible";
  document.querySelector("#initials").style.visibility= "visible";
  document.querySelector("#score").innerHTML = "Final Score: " + score + " out of " + trivia.quote.length;
}

function addUser(){
  //1. gather data
var name=document.querySelector("#initials").value;
var userObj={
  username:name,
  userscore:score
};
//2.verify data
// console.log(userObj);

//3. push data into array
userArray.push(userObj);

//4. verify pushed data
// console.log(userArray);

//5. set data to local storage
localStorage.setItem("scoreList", JSON.stringify(userArray));

//6. go to local storage and verify update is correct

//7. display all users
scoreOnPage();
}

function scoreOnPage() {
  //after user submit scores hide input area
  document.querySelector("#submit").style.visibility= "hidden";
  document.querySelector("#initials").style.visibility= "hidden";
  document.querySelector("#scoreboard").innerHTML="";
  var scoreList = JSON.parse(localStorage.getItem("scoreList"));
  var highscoreindex=0;
  
    if (!Array.isArray(scoreList)) {
      scoreList = [];
    }

  for (var i = 0; i < 5; i++) {
    //if condional to find the highestscore index
    //if the current score is higher than the highscore then update the highscoreindex
    if(scoreList[i].userscore>scoreList[highscoreindex].userscore){
      highscoreindex=i;
    }
    //check correct highscore
    console.log("highscore: "+ scoreList[highscoreindex].username);
    //dynamically add high score user to html
    document.querySelector("#highscore").innerHTML="<b>HIGHSCORE NAME:</b> "+scoreList[highscoreindex].username+ "<b> | SCORE: </b>"+scoreList[highscoreindex].userscore;
    //dynamically append each user
    var p = document.createElement("p");
    p.setAttribute("id","user");
    //<p id="user"></p>
    p.textContent=scoreList[i].username+ " "+scoreList[i].userscore;
    //<p>vivian</p>
    // const key = localStorage.key(i);
    // const value = localStorage.getItem(key);
  
    document.querySelector("#scoreboard").appendChild(p);
  }
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