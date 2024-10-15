// Josué Badilla Paredes 2024

// ...
const playableCharacter = document.getElementById("playable_character");
const block = document.getElementById("block");

function jump() {
  if (playableCharacter.classList != "animate") {
    playableCharacter.classList.add("animate");
    setTimeout(function() { playableCharacter.classList.remove("animate"); }, 500);
  }
}
