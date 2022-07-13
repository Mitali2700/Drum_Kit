// document.querySelector("button").addEventListener("click", handleClick);
// // If we write handleClick with paranthesis inside the .addEventListener then imidiately popup will come when we refresh our website 

// function handleClick(){
//     alert("I got clicked!");
//}

var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for(var i=0; i<numberOfDrumButtons; i++){

    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        // alert("I got clicked!");
        var audio = new Audio("sounds/crash.mp3");
        audio.play();
    });
}
