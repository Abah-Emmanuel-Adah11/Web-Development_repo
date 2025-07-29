let userClickedPattern = []
let gamePattern = []
let buttonColor = ["red","blue","green","yellow"]

let started = false;
let level = 0;


$(document).keypress(function(){
    if (!started){
        $("#level-title").text("Level "+level);
        started = true;
    }
    nextSequence();
})


$(".btn").click(function(){
    let userChosenColor = $(this).attr("id") // i.e give me the id of  this ".btn" thati was clicked.
    userClickedPattern.push(userChosenColor);
    playSound(userChosenColor);
    
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
        setTimeout(function () {
        $("body").removeClass("game-over") 
        }, 200);

        $("#level-title").text("Game Over, press Any Key to Restart");
        startOver();
    }
};


function nextSequence() {
    userClickedPattern = [];
    level++;

    $("#level-title").text("Level "+level);
    let randomNumber = Math.floor(Math.random() * 4)
    let randomChosenColor = buttonColor[randomNumber]
    gamePattern.push(randomChosenColor); // i.e inside game pattern push randomChoosenColor.
    $("#"+randomChosenColor).fadeOut(100).fadeIn(100); // Modified this line
    playSound(randomChosenColor);

};

function playSound(name) {
    let audio = new Audio("sounds/" + randomChosenColor + ".mp3");
     audio.play();
    
};

function animatePress(currentColor) {
    $("#"+currentColor).addClass("pressed")
    setTimeout(function(){
        $("#"+currentColor).removeClass("pressed")
    }, 100);
}

function startOver() {
    level = 0;
    gamePattern = [];
    started = false;
};

   




// $("h1").click(function () {
//     $("h1").html("<b>I got clicked</b>")
    
// });

// $("input").keypress(function(event) {
//     console.log(event.key) 
// });