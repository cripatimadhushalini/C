class Quiz {
  constructor(){

  }

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
      question = new Question();
      question.display();
    }
  }

  play(){

    //write code here to hide question elements
    
    //write code to change the background color here "completed"
    background(bg);

    //write code to show a heading for showing the result of Quiz

    //call getContestantInfo( ) here "completed"
    Contestant.getPlayerInfo();

    //write condition to check if contestantInfor is not undefined
    if(allContestants!==undefined){
      fill("blue");
      textSize(20);
      text("NOTE : Contestant who answered correct are highlighted in green color",500,500);

      for(var plr in allContestants){
        var correctAns = "2";
      if(correctAns===allContestants[plr].index){
        fill("green");
       }else{
        fill("red");
  }

    textSize(20)
     correctAns+=90;
     text(allContestants[plr].name+" : "+allContestants[plr].answer,400,correctAns);
 }
    }
    //write code to add a note here



    //write code to highlight contest who answered correctly


   }
      }
