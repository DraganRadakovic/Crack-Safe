const game = document.querySelector(".game");
const button = document.querySelector(".button");
let play = false;
let score = 0;
let maxValue = 9;
let minValue = 0;

button.addEventListener("click", function () {
  //if the button is clicked for the first time
  //we check the play button is false
  //if it is set to true.
  if (!play) {
    play = true;
    score = 0;
    game.innerHTML = "";
    maker();
    //update the content of the button
    button.innerHTML = "Guess Number";
  } else {
    score++;
    //select all number elements loop through the objects
    //and select all elements that match
    const numbers = document.querySelectorAll(".numb");
    //check how many numbers is correct
    let win = 0;
    for (let i = 0; i < numbers.length; i++) {
      // check if they match
      // if they match change the color of the element
      if (numbers[i].value == numbers[i].correct) {
        numbers[i].style.backgroundColor = "green";
        numbers[i].style.color = "white";
        win++;
      } else {
        // if the player miss the number change the color
        let color = numbers[i].value < numbers[i].correct ? "blue" : "red";
        numbers[i].style.backgroundColor = color;
      }
      if (win == numbers.length) {
        gameEnd();
      }
    }
  }
});

function gameEnd() {
  play = false;
  button.innerHTML = "Restart Game";
}

//generate html element
function maker() {
  for (let i = 0; i < 4; i++) {
    let element = document.createElement("input");
    element.setAttribute("type", "number");
    element.min = minValue;
    element.max = maxValue;
    element.size = 1;
    element.order = i;
    element.style.width = "70px";
    element.classList.add("fontsiz");
    element.correct = Math.floor(Math.random() * 10);
    element.value = 0;
    element.classList.add("numb");
    game.appendChild(element);
  }
}
