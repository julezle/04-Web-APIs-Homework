      // VARIABLES
      // ==========================================================================

      var score = 0;
      var quoteIndex = 0;

      var trivia = 
      {
        quote:["'Inconceivable!'","'Houston, we have a problem.'","'Why are you dressed like somebody died?'","'You’re gonna get killed chasing after your damn ‘fortune and glory’!'"
        ],
        movie:[
          ["Princess Bride", "The Count of Monte Cristo","The Three Musketeers"],
          ["Intersteller","The Martian","Apollo 13"],
          ["Hocus Pocus","Beetle Juice","The Addams Family"],
          ["National Treasure","The Goonies","Indiana Jones"]
        ],
        answer:["Princess Bride","Apollo 13","The Addams Family","Indiana Jones"]
      };

      // The object questions for our quiz game.


      //================FUNCTIONS================//

      function renderQuote() {
        //emptying
        document.querySelector("#movie").innerHTML="";
        if (quoteIndex <= (trivia.quote.length - 1)) {
          document.querySelector("#displayQuote").innerHTML = trivia.quote[quoteIndex];
          for(var i=0; i<trivia.movie[quoteIndex].length;i++) {
          //  console.log(trivia.movie[quoteIndex][i]);
            var btn = document.createElement("button");
            btn.setAttribute("class", "userchoice");
            btn.setAttribute("value", trivia.movie[quoteIndex][i]);
            btn.textContent= trivia.movie[quoteIndex][i];
            document.querySelector("#movie").appendChild(btn);
          }
          // console.log(trivia.answer[quoteIndex]);
          document.querySelector("#answer").innerHTML = trivia.answer[quoteIndex];
        }
        // If there aren't, render the end game screen.
        else {
          document.querySelector("#displayQuote").innerHTML = "Game Over!";
          document.querySelector("#score").innerHTML = "Final Score: " + score + " out of " + trivia.quote.length;
        }
      };

      // quoteIndex++;
      renderQuote();

       // Function that updates the score...
       function updateScore() {
        document.querySelector("#score").innerHTML = "Score: " + score;
      }

          // Increment the questionIndex variable and call the renderQuestion function.
          quoteIndex++;
          // renderQuote();
          updateScore();
          

    