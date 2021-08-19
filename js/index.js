// ##################################################################################33
// ### Helper Functions ### 
// ##################################################################################33

function playButton(innerHTML) { 
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

function buttonAnimation(currentKey){ 
    /**
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

// ##################################################################################33
// ### Script Logic ### 
// ##################################################################################33

// ## 1. Modify logic of all buttons ## 

// obtain length of all drums 
var numOfDrumButtons = document.querySelectorAll(".drum").length; 

// colours to choose from 
const colours = ["blue","white","yellow","black","grey","red","aqua"]; 

// loop through the array addint the events to each button 
for (let i=0; i < numOfDrumButtons; i++){ 
    // add the click event 
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        // obtain the button inner html 
        var buttonInnerHTML = this.innerHTML; 
        console.log("button: ", buttonInnerHTML); 

        // change the attribute colour randomly 
        let randColor = colours[Math.floor(Math.random()*colours.length)]; 
        this.style.color = randColor; 

        // play appropriate button 
        playButton(buttonInnerHTML); 

        // add an animation 
        buttonAnimation(buttonInnerHTML); 
    }); 
}

// ## 2. Enable keyboard pressing 

// add an event for the page when a key is pressed
// note: the event on keypressed is passed to inner function
document.addEventListener("keypress", function(event) {
    // capture event and log  
    console.log(event); 
    // play the appropriate sound (key is pressed key)
    playButton(event.key); 
}); 

// ##################################################################################33
// ### Ignore ### 
// ##################################################################################33

// // here we will add the logic of the sounds 
// var audio = new Audio("sounds/tom-1."); 
// audio.play(); 

// // Original logic  
// function handleClick() { 
//     alert("uwu");
// }

// // Add a click function to the button  
// document.querySelector("button").addEventListener("click", handleClick);







