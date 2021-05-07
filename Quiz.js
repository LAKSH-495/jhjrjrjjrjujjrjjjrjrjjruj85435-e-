class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){     
    //write code here to hide question elements

    //write code to change the background color here
    if(contestantCount === 2){
      background("skyBlue")
      text("RESULT OF THE QUIZ",350,0)
    }

    //write code to show a heading for showing the result of Quiz
  

    //call getContestantInfo( ) here

    if (allContestants !== undefined){
      fill("blue")
      textSize(20);
      text("NOTE : CONTESTANT WHO'S ANSWER IS CORRECT HAVE THEIR NAME HIGHLIGHTED IN GREEN COL0R",130,230)
    }

    //write condition to check if contestantInfor is not undefined
    if (allContestant !== undefined){

    }

    //write code to add a note here

    //write code to highlight contest who answered correctly
    for(var plr in allContestants){
      var correctAns = "b"
      if(correctAns === allContestants[plr].answer){
        fill("green")
      }
      else{ 
        fill("red");
      }
    }
    
  }

}