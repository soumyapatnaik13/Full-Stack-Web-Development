let c = document.querySelectorAll(".drum");
let len = c.length;

// for clicking
for (let i = 0; i < len; i++) {
    c[i].addEventListener("click", function() {
        let tagName = this.innerHTML;
        CheckEvent(tagName);
        applyShadow(tagName);
    });
}

// for keypress
document.addEventListener("keypress", function(event){
    let tagName = event.key;
    CheckEvent(tagName);
    applyShadow(tagName);
});

function CheckEvent(tagName) {
    switch (tagName) {
        case 'w':
            new Audio("sounds/crash.mp3").play();
            break;
        case 'a':
            new Audio("sounds/kick-bass.mp3").play();
            break;
        case 's':
            new Audio("sounds/snare.mp3").play();
            break;
        case 'd':
            new Audio("sounds/tom-1.mp3").play();
            break;
        case 'j':
            new Audio("sounds/tom-2.mp3").play();
            break;
        case 'k':
            new Audio("sounds/tom-3.mp3").play();
            break;
        case 'l':
            new Audio("sounds/tom-4.mp3").play();
            break;
    }
}
function applyShadow(tagName){
   //fetch the class
   let className= document.querySelector("."+ tagName);
   className.classList.add("pressed");
   setTimeout(()=> {
    className.classList.remove("pressed");
   },100);
}
/*
function anotherAddEventListener(typeOfEvent, callback) {
    const eventObj = callback(typeOfEvent); 
    return eventObj;                        
}

function callBack(type) {
    if(type === 'click') {
        return new TypeOfClickObj("click", 2, 2);
    } else if(type === 'keyword') {
        return new TypeOfClickObj("keyword", 4, 5);
    }
}

function TypeOfClickObj(eventType, key, durationOfKeyPress) {
    this.eventType = eventType;
    this.key = key;
    this.durationOfKeyPress = durationOfKeyPress;
}
const clickEvent = anotherAddEventListener('click', callBack);
console.log(clickEvent); 
*/