for (var i = 0; i < 7; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function() {
        var innerhtmlvar = this.innerHTML.toLowerCase();
        makeSound(innerhtmlvar);
        buttonanimation(innerhtmlvar);
    });
}

document.addEventListener("keydown",function(event){
    makeSound(event.key.toLowerCase());
    buttonanimation(event.key.toLowerCase());

});
function makeSound(k){

    switch (k) {
        case "w":
            var audio = new Audio('sounds/crash.mp3');
            audio.play();
            break;
        case "s":
            var audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
            break;
        case "a":
            var audio = new Audio('sounds/snare.mp3');
            audio.play();
            break;
        case "d":
            var audio = new Audio('sounds/tom-1.mp3');
            audio.play();
            break;
        case "j":
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play();
            break;
        case "k":
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play();
            break;
        case "l":
            var audio = new Audio('sounds/tom-4.mp3');
            audio.play();
            break;
        default: break;
    }
}
function buttonanimation(inp){
    document.querySelector("."+inp).classList.add("pressed");
    setTimeout(function(){
        document.querySelector("."+inp).classList.remove("pressed")
    },100);
}