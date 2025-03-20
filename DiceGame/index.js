/* image 1 */
let randomNumber1 = Math.floor(Math.random()*6)+1; //Generating random numbers from 1 to 6

let image1 = "images/dice"+randomNumber1+".png";  //Obtaining our images base on the random number generated

let image1Store = document.querySelectorAll("img")[0].setAttribute("src",image1); //changing images to match the random number



/* image 2 */
let randomNumber2 = Math.floor(Math.random()*6)+1;

let image2 = "images/dice"+randomNumber2+".png";

let image2Store = document.querySelectorAll("img")[1].setAttribute("src", image2);



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