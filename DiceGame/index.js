/* image 1 */
var randomNumber1 = Math.floor(Math.random()*6)+1; //Generating random numbers

var image1 = "images/dice"+randomNumber1+".png";  //Obtaining our images base on the random number generated

var image1Store = document.querySelectorAll("img")[0].setAttribute("src",image1); //changing images to match the random number



/* image 2 */
var randomNumber2 = Math.floor(Math.random()*6)+1;

var image2 = "images/dice"+randomNumber2+".png";

var image2Store = document.querySelectorAll("img")[1].setAttribute("src", image2);



/* conditionals */

if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML="<b>Player 1 wins!</b>";
}

else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML="<b>Player 2 wins!</b>";
}

else{
    document.querySelector("h1").innerHTML="<b>its a tile</b>";
}