import {playButton,  buttonAnimation} from './helpers.js'; 

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
        var keyname = this.innerHTML; 
        console.log("button: ", keyname); 

        // change the attribute colour randomly 
        let randColor = colours[Math.floor(Math.random()*colours.length)]; 
        this.style.color = randColor; 

        // play appropriate button 
        playButton(keyname); 

        // add an animation 
        buttonAnimation(keyname); 
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

    // add the appropriate animation 
    buttonAnimation(event.key); 
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







