// document.querySelector("button").addEventListener("click", handleClick);
// // If we write handleClick with paranthesis inside the .addEventListener then imidiately popup will come when we refresh our website 

// function handleClick(){
//     alert("I got clicked!");
//}

var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for(var i=0; i<numberOfDrumButtons; i++){

    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
       
        var buttonInnerHTML= this.innerHTML;

        makeSound(buttonInnerHTML);
        
    });
}

// var audio = new Audio("sounds/crash.mp3");
//         audio.play();


//Detecting Keyboard Press

document.addEventListener("keypress", function(event){
    //alert("Key was Pressed!");
    makeSound(event.key);
});
//You can add an event listener to the entire document, so that the entire web page starts listening for keyboard strokes.

function makeSound(key){
    switch (key) {
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
            break;

        case "d":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break; 

        case "j":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;    
            
        case "k":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;

        case "l":
                var audio = new Audio("sounds/kick.mp3");
                audio.play();
                break;
        default:
            break;
    }
    
}