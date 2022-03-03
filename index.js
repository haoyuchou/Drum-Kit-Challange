//Detecting button press

var buttons = document.querySelectorAll(".drum");
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function() {
    //this = buttons[i]
    var buttonInnerHtml = this.innerHTML;
    makeSound(buttonInnerHtml);
    buttonAnimation(buttonInnerHtml);
  })
}



document.addEventListener("keydown", function(event) {
  makeSound(event.key);
  buttonAnimation(event.key)
})

//Detecting keyboard press

function makeSound(enterKey) {
  switch (enterKey) {
    case "w":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "a":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    case "s":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "d":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "j":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "k":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "l":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    default:
      console.log(enterKey);

  }
}

function buttonAnimation(currentKey) {
  var currentButton = document.querySelector("." + currentKey);
  currentButton.classList.add("pressed");

  setTimeout(function() {
    currentButton.classList.remove("pressed");
  }, 100);
}
