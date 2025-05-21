let buttonColor = ["red","blue","green","yellow"]
let gamePattern = []
let userClickedPattern = []


 $(".btn").click(function(event){
        let userChoosenColour = $(this).attr("id");
        userClickedPattern.push(userChoosenColour)
        playSound(userChoosenColour); // As you call this function takes the userChoosenColor
                                        // as its input parameter. 
});

    

function nextSequence() {
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
    $(".btn").addClass("pressed")
    setTimeout(() => {
        
    }, 100);
}