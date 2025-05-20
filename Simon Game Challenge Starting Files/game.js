
let buttonColors = ["red","blue","green","yellow"];
let gamePattern =[];


function nextSequence(){

    let randomNumber = Math.floor(Math.random() * 4);
    let randomChosenColor = buttonColors[randomNumber]
    gamePattern.push(randomChosenColor);
    $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);

    let audio = new Audio("sounds/"+ randomChosenColor+".mp3");
    audio.play();

    $("button").click(function() {
        
    });
};




nextSequence();




// $("h1").click(function () {
//     $("h1").html("<b>I got clicked</b>")
    
// });

// $("input").keypress(function(event) {
//     console.log(event.key) 
// });