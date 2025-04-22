// let gamePattern = [];
// gamePattern.push(randomChosenColor);

// let buttonColor = ["red", "blue", "green", "yellow"];
// let randomChosenColor = buttonColor[nextSequence()];

// function nextSequence(){
//     let randomNumber = Math.floor(Math.random() * 4);
// };

let buttonColor = ["red","blue","green","yellow"];




function nextSequence(){

    let randomNumber = Math.floor(Math.random() * 4);
    // console.log(randomNumber);
    let randomChosenColor = buttonColor[randomNumber]
    // console.log(randomChosenColor);
    let gamePattern =[];
    gamePattern.push(randomChosenColor);
    console.log(gamePattern);
};