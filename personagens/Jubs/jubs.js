const question = document.querySelector(".question");
const answers = document.querySelector(".answers");
const spnQtd = document.querySelector(".spnQtd");
const textFinish = document.querySelector(".finish span");
const content = document.querySelector(".content");
const contentFinish = document.querySelector(".finish");
const btnRestart = document.querySelector(".finish button");

const questions = [
  {
    question: "Qual é a distância mínima que deve ser mantida ao ultrapassar uma bicicleta?",
    answers: [
      {
        option: "1 metro",
        correct: true,
      },
      {
        option: "2 metros",
        correct: false,
      },
      {
        option:
          "50 centímetros",
        correct: false,
      },
    ],
  },
  {
    question: "O que significa a placa de trânsito com a letra `P` em fundo azul?",
    answers: [
      { option: " Proibido estacionar", correct: false },
      {
        option:
          "Estacionamento permitido          ",
        correct: true,
      },
      {
        option: "Parada obrigatória",
        correct: false,
      },
    ],
  },
  {
    question: "Qual é a velocidade máxima permitida em uma área residencial?",
    answers: [
      { option: "80 km/h", correct: false },
      { option: "60 km/h", correct: false },
      {
        option:
          "40 km/h",
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
    <button class="answer_button finish_button-jubs" data-correct="${answer.correct}">
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
