var numberOfDrumBottons  = document.querySelectorAll(".drum").length;

for(let i = 0; i < numberOfDrumBottons; i++){

document.querySelectorAll(".drum")[i].addEventListener("click", function(){

    alert("I just got clicked");
});
};