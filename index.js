// document.querySelector("button").addEventListener("click", handleClick) /*will select the first button only and here we need 
// to call the function wiothout parenthesis, as if we do then the function will be triggered as soon as event listner is called. 
// We want to trigger when the click happens, we are passinng the name of the function as an input i.e. we are waiting for this click event to happen before we call handle click function
// Therefore its an idea of passing the function as an input so that it can be called later.    */

// function handleClick(){
//     alert("I got clicked"); 
// }

//OR

// document.querySelector(".set").addEventListener("click", function handleClick(){ //amonomous function method, also bu replacing button by set will apply the function to each button
//     alert("I got clicked "); 
// })



// // we need to make use of loop to make all the drum buttons active on the browser
// var numOfDrumButtons = document.querySelectorAll(".drum").length; //.drum bcoz to specifically apply the alert to drum buttons, as if we put .button and created further buttons then the loop will get applied to those too            
// for(var i=0; i<=numOfDrumButtons; i++){ //i<= ki jaroorat nahi bcoz i 6 tak hi jaega ( 7 buttons, so i ki value 0 to 6)

//     document.querySelectorAll(".drum")[i].addEventListener("click", function handleClick(){ //amonomous function method, also bu replacing button by set will apply the function to each button
//     alert("I got clicked "); 
// })  
// }



//NOw, insted of alert we need to play sound in our file



// var audio1 = new Audio("sounds/tom-1.mp3");
// document.querySelector(".w").addEventListener("click", function AudioPlay(){
//     audio1.play();
// })

// var audio2 = new Audio("sounds/tom-2.mp3");
// document.querySelector(".a").addEventListener("click", function AudioPlay(){
//     audio2.play();
// })

// var audio3 = new Audio("sounds/tom-3.mp3");
// document.querySelector(".s").addEventListener("click", function AudioPlay(){
//     audio3.play();
// })

// var audio4 = new Audio("sounds/tom-4.mp3");
// document.querySelector(".d").addEventListener("click", function AudioPlay(){
//     audio4.play();
// })

// var audio5 = new Audio("sounds/crash.mp3");
// document.querySelector(".j").addEventListener("click", function AudioPlay(){
//     audio5.play();
// })

// var audio6 = new Audio("sounds/kick-bass.mp3");
// document.querySelector(".k  ").addEventListener("click", function AudioPlay(){
//     audio6.play();
// })   


// var audio7 = new Audio("sounds/snare.mp3");
// document.querySelector(".l").addEventListener("click", function AudioPlay(){
//     audio7.play();
// })


//the above code will play sound but on the mouse click, but we want it on a button click
//OR

//this identity oif button :139




// var numberOfDrumButtons =document.querySelectorAll(".drum").length;

// for(var i = 0; i<numberOfDrumButtons; i++){
// document.querySelectorAll(".drum")[i].addEventListener("click",function(){
//     var buttonInnerHTML = this.innerHTML
//     switch (buttonInnerHTML) {

//         case "w":    
//             var audio1 = new Audio("sounds/tom-1.mp3");
//             audio1.play();
//             break; // tells the code to ecit the switch statement

//         case "a":
//             var audio2 = new Audio("sounds/tom-2.mp3");
//             audio2.play();
           
//             break;

//         case "s":
//             var audio3 = new Audio("sounds/tom-3.mp3");
            
//             audio3.play();
           
//             break;

//         case "d":
//             var audio4 = new Audio("sounds/tom-4.mp3");
            
//             audio4.play();
            
//             break;

//         case "j":
//             var audio5 = new Audio("sounds/crash.mp3");
            
//             audio5.play();
            
//             break;

//          case "k" :
//             var audio6 = new Audio("sounds/kick-bass.mp3");
            
//             audio6.play();
            
//             break;

//         case "l":
//             var audio7 = new Audio("sounds/snare.mp3");
            
//             audio7.play();
            
//             break;
            
//         default:console.log(buttonInnerHTML);
           
//     }
// })
// }

// document.addEventListener("keypress", function (event) {
//     console.log(event);   //gives us each and every detail of the event, if we pess a on keyboard a long list will show up in console about the button pressed. But we only worry about "key". SO "event.key" 
// })





 //Detecting Button Pressed
var numberOfDrumButtons =document.querySelectorAll(".drum").length;


//deetction of mouse click, even if we comment out this part the keyboard will be responsive to the website
for(var i = 0; i<numberOfDrumButtons; i++){
document.querySelectorAll(".drum")[i].addEventListener("click",function(){
    var buttonInnerHTML = this.innerHTML
    makeSound(buttonInnerHTML); //we will pass buttonInnerHTML as parameter, which is exactly inner HTML of the button pressed
    buttonAnimation(buttonInnerHTML);

})
}       



//Detection Keyboard pressed: a little different from mouse click
document.addEventListener("keypress", function (event) { 
    makeSound(event.key);  // function(event) will give all the info about it, and since specifically we just want the key therefore, event.key will retrive the key pressed
    buttonAnimation(event.key);

})  
// Threfore, now if I press w on keyboard then : buttonInnerHTML is also w and event.key is also w


//function used in both parts, mouse and keyboard
function makeSound(key) {
    switch (key) {

        case "w":    
            var audio1 = new Audio("sounds/tom-1.mp3");
            audio1.play();
            break; // tells the code to xcit the switch statement

        case "a":
            var audio2 = new Audio("sounds/tom-2.mp3");
            audio2.play();
           
            break;

        case "s":
            var audio3 = new Audio("sounds/tom-3.mp3");
            
            audio3.play();
           
            break;

        case "d":
            var audio4 = new Audio("sounds/tom-4.mp3");
            
            audio4.play();
            
            break;

        case "j":
            var audio5 = new Audio("sounds/crash.mp3");
            
            audio5.play();
            
            break;

         case "k" :
            var audio6 = new Audio("sounds/kick-bass.mp3");
            
            audio6.play();
            
            break;

        case "l":
            var audio7 = new Audio("sounds/snare.mp3");
            
            audio7.play();
            
            break;
            
        default:console.log(buttonInnerHTML);
           
    }
}

function buttonAnimation(currentkey){
   var activeButton=  document.querySelector("."+currentkey) //example, to select key of w class, we need to put in .w 
   activeButton.classList.add("pressed");    
   setTimeout(function(){
    activeButton.classList.remove("pressed")   
   }, 100) 

}














