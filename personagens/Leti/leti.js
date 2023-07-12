const question = document.querySelector(".question");
const answers = document.querySelector(".answers");
const spnQtd = document.querySelector(".spnQtd");
const textFinish = document.querySelector(".finish span");
const content = document.querySelector(".content");
const contentFinish = document.querySelector(".finish");
const btnRestart = document.querySelector(".finish button");

const questions = [
  {
    question: "Qual é o objetivo principal do cinto de segurança?",
    answers: [
      {
        option: "Evitar multas de trânsito.",
        correct: false,
      },
      {
        option: "Proporcionar conforto durante a viagem.",
        correct: false,
      },
      {
        option:
          "Proteger o ocupante do veículo em caso de colisões ou freadas bruscas.",
        correct: true,
      },
    ],
  },
  {
    question: "É seguro viajar sem utilizar o cinto de segurança?",
    answers: [
      { option: "Sim, desde que o motorista seja experiente.", correct: false },
      {
        option:
          "Não, pois aumenta significativamente o risco de ferimentos graves ou fatais em caso de acidentes.",
        correct: true,
      },
      {
        option: "Sim, desde que a velocidade do veículo seja baixa.",
        correct: false,
      },
    ],
  },
  {
    question: "Quem deve usar o cinto de segurança em um veículo?",
    answers: [
      { option: "Apenas os passageiros do banco da frente.", correct: false },
      { option: "Apenas o motorista", correct: false },
      {
        option:
          "Todos os ocupantes do veículo, independentemente da posição que ocupam.",
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
    <button class="answer_button finish_button-leti" data-correct="${answer.correct}">
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
