const question = document.querySelector(".question");
const answers = document.querySelector(".answers");
const spnQtd = document.querySelector(".spnQtd");
const textFinish = document.querySelector(".finish span");
const content = document.querySelector(".content");
const contentFinish = document.querySelector(".finish");
const btnRestart = document.querySelector(".finish button");

const questions = [
  {
    question: "Qual é a base do rodízio de veículos em São Paulo?",
    answers: [
      {
        option: "Marca do veículo",
        correct: false,
      },
      {
        option: "Cor do veículo",
        correct: false,
      },
      {
        option: "Final da placa",
        correct: true,
      },
    ],
  },
  {
    question:
      "Qual o período em que o rodízio de veículos ocorre em São Paulo?",
    answers: [
      { option: "Todos os dias da semana", correct: false },
      {
        option: "Segunda a sexta-feira",
        correct: true,
      },
      {
        option: "Sábado e domingo",
        correct: false,
      },
    ],
  },
  {
    question: "Qual o horário do rodízio de veículos em São Paulo?",
    answers: [
      { option: "Das 8h às 20h", correct: false },
      { option: "Das 10h às 16h", correct: false },
      {
        option: "Das 7h às 10h e das 17h às 20h",
        correct: true,
      },
    ],
  },
];

let currentIndex = 0;
let questionsCorrect = 0;

btnRestart.onclick = () => {
  content.style.display = "flex";
  contentFinish.style.display = "none";

  currentIndex = 0;
  questionsCorrect = 0;
  loadQuestion();
};

function nextQuestion(e) {
  if (e.target.getAttribute("data-correct") === "true") {
    questionsCorrect++;
  }

  if (currentIndex < questions.length - 1) {
    currentIndex++;
    loadQuestion();
  } else {
    finish();
  }
}

function finish() {
  textFinish.innerHTML = `Você acertou ${questionsCorrect} de ${questions.length}`;
  content.style.display = "none";
  contentFinish.style.display = "flex";
}

function loadQuestion() {
  spnQtd.innerHTML = `${currentIndex + 1}/${questions.length}`;
  const item = questions[currentIndex];
  answers.innerHTML = "";
  question.innerHTML = item.question;

  item.answers.forEach((answer) => {
    const div = document.createElement("div");

    div.innerHTML = `
    <button class="answer_button finish_button-nath" data-correct="${answer.correct}">
      ${answer.option}
    </button>
    `;

    answers.appendChild(div);
  });

  document.querySelectorAll(".answer_button").forEach((item) => {
    item.addEventListener("click", nextQuestion);
  });
}

loadQuestion();
