let buttonColor = ["red","blue","green","yellow"]
let gamePattern = []

function nextSequence() {


    let randomNumber = Math.floor(Math.random() * 4)
    let randomChosenColor = buttonColor[randomNumber]
    gamePattern.push(randomChosenColor)


    $("#"+randomChosenColor).fadeOut(100).fadeIn(100); // Modified this line

    let audio = new Audio("sounds/" + randomChosenColor + ".mp3");
    audio.play();

    $("#"+randomChosenColor).("click", function() {
       this.$() 
    });
      
}

// nextSequence();
//console.log(color)