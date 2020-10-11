var buttonColours = ["red","green","yellow","blue"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var started = false ;


$(document).keypress(function(){
  if(!started){
     $("#level-title").text("level " + level);
     nextSequence();
     started = true ;
  }
});


$(".btn").click(function(){
    var userChoosenColor = $(this).attr("id");
    userClickedPattern.push(userChoosenColor);
        playSound(userChoosenColor);
        animate(userChoosenColor);
        checkAnswer(userClickedPattern.length-1);
      }
);



function checkAnswer(currentLevel){
  if(userClickedPattern[currentLevel] === gamePattern[currentLevel]){
      
    if(userClickedPattern.length === gamePattern.length){
      setTimeout(function(){
        nextSequence();
      },1000); 
    }


  }
  else{
    $("#level-title").text("game-over,press any key to restart");
     playSound("wrong");
     $("body").addClass("game-over");
     setTimeout(function(){
       $("body").removeClass("game-over");

     },200);
      startOver();
  }
}

function nextSequence() {
      
    userClickedPattern = [];
    level++;
    $("#level-title").text("level " + level);

    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
     gamePattern.push(randomChosenColour);
     
  $("#"+randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);    
           playSound(randomChosenColour);
  }
  
  function playSound(color){
    var s = new Audio("sounds/"+ color + ".mp3");
       s.play();   
  }

  function animate(color){
      $("#"+ color).addClass("pressed");
      setTimeout(function(){$("#"+ color).removeClass("pressed");},100);

    }

 function startOver(){
     started = false;
     gamePattern = [];
     level = 0 ;
 }


