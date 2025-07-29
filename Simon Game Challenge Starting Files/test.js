let buttonColor = ["red","blue","green","yellow"];
let gamePattern = [];
let userClickedPattern = [];

let started = false;
var level = 0;


$(document).keypress(function(){

    if (!started) {
        $("#level-title").text("Level "+level)
        nextSequence();
        started = true;  
    }
});


 $(".btn").click(function(){
        let userChoosenColour = $(this).attr("id");
        userClickedPattern.push(userChoosenColour)
        playSound(userChoosenColour); // As you call this function takes the userChoosenColor
                                        // as its input parameter. 
        animatePress(userChoosenColour); // same as playSound function above.
        checkAnswer(userClickedPattern.length-1);
});


function checkAnswer(currentLevel) {
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
      console.log("success");
      if (userClickedPattern.length === gamePattern.length){
        setTimeout(function () {
          nextSequence();
        }, 1000);
      }

    }  else{
        console.log("wrong");
        playSound("wrong");
        $("body").addClass("game-over")
    }
};


function nextSequence() {
    userClickedPattern = [];

    level++;
    $("#level-title").text("Level "+level)

    let randomNumber = Math.floor(Math.random() * 4)
    let randomChosenColor = buttonColor[randomNumber]
    gamePattern.push(randomChosenColor)

    $("#"+randomChosenColor).fadeOut(100).fadeIn(100); // Modified this line

    playSound(randomChosenColor); // As you call the playsound function it takes the
                                    // randomChoosenColor as input parameter.
}


function playSound(name) {    // This is the factory where all the input parameters of the 
                                // playSound() function wil be recieved and processed.        
    let audio = new Audio("sounds/" + randomChosenColor + ".mp3");
    audio.play();

};

function animatePress(currentColor) {
    $("#" + currentColor).addClass("pressed")
    setTimeout(function(){
        $("#" + currentColor).removeClass("pressed")
    }, 100);
};


