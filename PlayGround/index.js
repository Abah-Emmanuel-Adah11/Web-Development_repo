//Dice 1
// Generating random numbers which will be multiplied by 6 and 1 added to cover up for the Math.floor rounding down.
let random = Math.floor(Math.random() *6 + 1);

// Dice 1 string concatinated for the dice image.
let random_images = "images/dice"+random+".png";

// it's "set attribute" method that set's the dice image from the default "src" to the random number generated.
document.querySelector(".dice1").setAttribute("src", random_images);


//DICE 2
let random2 = Math.floor(Math.random() *6 + 1);
let random_images2 = "images/dice"+random2+".png";

document.querySelector(".dice2").setAttribute("src", random_images2)


// Conditionals
if (random > random2){
    document.querySelector(".big_heading").innerHTML = "Player 1 won"
}
else if (random < random2){
    document.querySelector(".big_heading").innerHTML = "Player 2 won"
}else{
    document.querySelector(".big_heading").innerHTML = "Its a tie"
}