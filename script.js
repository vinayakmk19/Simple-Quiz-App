const questions = [
  {
    question: "wHich is the largest animal in the world .?",
    answers: [
      { text: "Shark", correct: false },
      { text: "Blue Whale", correct: true },
      { text: "Elephant", correct: false },
      { text: "Jiraffe", correct: false },
    ],
  },
  {
    question: "wHich is the smallest country in the world .?",
    answers: [
      { text: "Vatican City", correct: true },
      { text: "Sri Lanka", correct: false },
      { text: "Bhutan", correct: false },
      { text: "Nepal", correct: false },
    ],
  },
  {
    question: "wHich is the largest desert in the world .?",
    answers: [
      { text: "Sahara", correct: false },
      { text: "Thar", correct: false },
      { text: "kolahari", correct: false },
      { text: "antarctica", correct: true },
    ],
  },
  {
    question: "wHich is the smallest continent in the world .?",
    answers: [
      { text: "Shark", correct: false },
      { text: "Blue Whale", correct: true },
      { text: "Elephant", correct: false },
      { text: "Jiraffe", correct: false },
    ],
  },
  {
    question: "wHich is the largest animal in the world .?",
    answers: [
      { text: "Shark", correct: false },
      { text: "Blue Whale", correct: true },
      { text: "Elephant", correct: false },
      { text: "Jiraffe", correct: false },
    ],
  },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionindex = 0;
let score = 0;

function startQuiz() {
  currentQuestionindex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();

  let currentQuestion = questions[currentQuestionindex];
  let questionNo = currentQuestionindex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    let button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  const selectedButton = e.target;
  let isCorrect = selectedButton.dataset.correct === "true";
  if (isCorrect) {
    selectedButton.classList.add("correct");
    score++;
  } else {
    selectedButton.classList.add("incorrect");
  }
  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You Scored ${score} out of ${questions.length}`;
    nextButton.innerHTML = 'Play Again';
    nextButton.style.display = 'block';
}

function handleNextButton(){
    currentQuestionindex++;
    if(currentQuestionindex < questions.length){
        showQuestion();
    }else{
        showScore(); 
    }
}

nextButton.addEventListener("click", () => {
    if(currentQuestionindex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});

startQuiz();
