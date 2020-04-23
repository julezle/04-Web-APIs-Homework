      // VARIABLES
      // ==========================================================================
      

      var trivia = 
      {
        quote:["Inconceivable!","Houston, we have a problem.","Why are you dressed like somebody died?","You’re gonna get killed chasing after your damn ‘fortune and glory’!"
        ],
        movie:[
          ["Princess Bride", "The Count of Monte Cristo","The Three Musketeers"],
          ["Intersteller","The Martian","Apollo 13"],
          ["Hocus Pocus","Beetle Juice","The Addams Family"],
          ["National Treasure","The Goonies","Indiana Jones"]
        ],
        //***********Fix this answer array***********//
        answer:[movie[0][0],movie[1][2],movie[2][3],movie[3][3]]
      };
      console.log(trivia);
      //console.log(trivia.movie[0][0])
      console.log(trivia.quote[0]);
      //console.log(trivia.movie[0].length);

       for(var i=0; i<trivia.movie[0].length;i++){
        console.log(trivia.movie[0][i]);
       }

       console.log(trivia.answer[0]);

      //if(userinput ==trivia.answer[0])


      

      // The object questions for our quiz game.





      // We start the game with a score of 0.
      var score = 0;
      // Variable to hold the index of current question.

      // Array of questions.


      //================FUNCTIONS================//


      // Function to render questions.
      function renderQuote() {

      };