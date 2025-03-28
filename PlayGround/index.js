// Creating a variable that will store the length of button selector to make for a neater code
let numberOfDrumBottons = document.querySelectorAll("button").length

// The count starts from 0 and stops at less than the length, because the counts usaually starts from 0
for (let i = 0; i < numberOfDrumBottons; i++){ 

    // The "i" here will hold the value of each iteration for necessary use and subsequently execute the
        //  lines of code in the annonymous function, which is the second input to the addEventListener
            // function below.
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){

        // This helps us identify the innerHTML of the particular button being clicked
        let innerHTML = this.innerHTML

        // The switch statement helps us switch between the innerHTML of whichever button is clicked
        // Dont forget to put your innerHTML value in quotation
            switch (innerHTML) {
                case "w":
                    let tom1 = new Audio('sounds/tom-1.mp3');
                    tom1.play();
                    break;

                case "a":
                    let tom2 = new Audio('sounds/tom-2.mp3');
                    tom2.play();
                    break;

                case "s":
                    let tom3 = new Audio('sounds/tom-3.mp3');
                    tom3.play();
                    break;

                case "d":
                    let tom4 = new Audio('sounds/tom-4.mp3');
                    tom4.play();
                    break;
                    
                case "j":
                    let snare = new Audio('sounds/snare.mp3')
                    snare.play();
                    break;

                case "k":
                    let crash = new Audio('sounds/crash.mp3')
                    crash.play();
                    break;

                case "l":
                    let kick = new Audio('sounds/kick-bass.mp3')
                    kick.play();
                    break;

                // This will take effect by default if non of the conditions are satisfied.
                default: console.log(innerHTML);
                    
                            
            }

     })        
}

    // Adding the event listner to listen for keypress
    document.addEventListener("keydown", function (event){

        let pressedKey = event.key
        switch (pressedKey) {
            case "w":
                let tom1 = new Audio('sounds/tom-1.mp3');
                tom1.play();
                break;

            case "a":
                let tom2 = new Audio('sounds/tom-2.mp3');
                tom2.play();
                break;

            case "s":
                let tom3 = new Audio('sounds/tom-3.mp3');
                tom3.play();
                break;

            case "d":
                let tom4 = new Audio('sounds/tom-4.mp3');
                tom3.play();
                break;

            case "j":
                let snare = new Audio('sounds/snare.mp3')
                snare.play();
                break;

            case "k":
                let crash = new Audio('sounds/snare.mp3')
                crash.play();
                break;

            case "l":
                let kick = new Audio('sounds/kick-bass.mp3')
                kick.play();
                break;
        
            default: console.log(event.key)
                break;
        }
        
    })