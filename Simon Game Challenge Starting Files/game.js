// let gamePattern = [];
// gamePattern.push(randomChosenColor);

// let buttonColor = ["red", "blue", "green", "yellow"];
// let randomChosenColor = buttonColor[nextSequence()];

// function nextSequence(){
//     let randomNumber = Math.floor(Math.random() * 4);
// };

let buttonColor = ["red","blue","green","yellow"];
let gamePattern =[];


function nextSequence(){

    let randomNumber = Math.floor(Math.random() * 4);
    let randomChosenColor = buttonColor[randomNumber]
    gamePattern.push(randomChosenColor);
    console.log(gamePattern);

};

// $("h1").click(function () {
//     $("h1").html("<b>I got clicked</b>")
    
// });

$("input").keypress(function(event) {
    console.log(event.key) 
});