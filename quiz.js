
function checkAnswer() {
let correctAnswer = "4";
let userAnswer = document.querySelector(
    'input[name="quiz"]:checked'
  )?.value;
   let feedbackElement = document.getElementById("feedback");
  if (userAnswer === correctAnswer) {
    feedbackElement.textContent = "Correct! Well done.";
      } else {
    feedbackElement.textContent = "That's incorrect. Try again!";
     }
}
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
