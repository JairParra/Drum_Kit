// ##################################################################################33
// ### Helper Functions ### 
// ##################################################################################33

export function playButton(innerHTML) { 
    /**
     * Plays the appropriate sounds according tot he input button class (innerHTML)
     */
    // play the appropriate sound depending on the html class 
    switch (innerHTML) {
        case "w":
            var audio = new Audio("sounds/tom-1.mp3"); 
            audio.play(); 
            break; 
        case "a":
            var audio = new Audio("sounds/tom-2.mp3"); 
            audio.play(); 
            break;  
        case "s":
            var audio = new Audio("sounds/tom-3.mp3"); 
            audio.play(); 
        case "d":
            var audio = new Audio("sounds/tom-4.mp3"); 
            audio.play();
            break; 
        case "j":
            var audio = new Audio("sounds/snare.mp3"); 
            audio.play();
            break; 
        case "k":
            var audio = new Audio("sounds/kick-bass.mp3"); 
            audio.play();
            break; 
        case "l":
            var audio = new Audio("sounds/crash.mp3"); 
            audio.play();
            break; 
        default:
            console.log("Failed for innerHTML=", innerHTML); 
            break;
    }
}

export function buttonAnimation(currentKey){ 
    /**
     * Function to activate the "pressed" css class animation of the input key 
     * which is the class to look for in the css styles. 
     * @args: 
     *  - currenKey: 
     */
    // select the current class given currentKey
    var activeButton = document.querySelector("." + currentKey); 

    // add the pressed class 
    activeButton.classList.add("pressed");  

    // reomve the pressed effect after some time 
    setTimeout(() => {
        activeButton.classList.remove("pressed"); 
    }, 100);
}