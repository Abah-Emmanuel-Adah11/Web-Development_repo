let buttonColor = ["red","blue","green","yellow"];
let gamePattern = [];
let userClickedPattern = [];

let started = false;
var level = 0;

// function checkAnswer(currentLevel) {
//     let lastAnswer = buttonColor[userClickedPattern].index()
//     if (lastAnswer = userClickedPattern) {
//         console.log("success")
//     }else{
//         console.log("wrong");
//     }
    
// }  // Step 8 current step.....


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
});

    

function nextSequence() {

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


