// Josué Badilla Paredes 2024

let playableCharacter = document.getElementById("playable_character");
let block = document.getElementById("block");

function jump() {
  if (playableCharacter.classList != "animate") {
    playableCharacter.classList.add("animate");
    setTimeout(function() { playableCharacter.classList.remove("animate"); }, 500);
  }
}
