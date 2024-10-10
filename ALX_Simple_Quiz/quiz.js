function checkAnswer(event) {
let userAnswer = event.target.value;
if(userAnswer === "correctAnswer"){
    userAnswer = 4;
    alert("Correct! Well done.");
}
}


let quiz = document.querySelector("quiz - container");
quiz - container.addEventListener("submit", checkAnswer);