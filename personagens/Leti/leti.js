const question = document.querySelector(".question");
const answers = document.querySelector(".answers");
const spnQtd = document.querySelector(".spnQtd");
const textFinish = document.querySelector(".finish span");
const content = document.querySelector(".content");
const contentFinish = document.querySelector(".finish");
const btnRestart = document.querySelector(".finish button");

const questions = [
  {
    question:
      "Qual é a importância de conhecer as regras de trânsito ao pedalar uma bicicleta?",
    answers: [
      {
        option: "Evitar multas de trânsito.",
        correct: false,
      },
      {
        option:
          "Garantir a segurança do ciclista e dos demais usuários da via.",
        correct: true,
      },
      {
        option: "Aumentar a velocidade nas vias.",
        correct: false,
      },
    ],
  },
  {
    question:
      "Por que é essencial ser visível no trânsito ao pedalar uma bicicleta?",
    answers: [
      {
        option: "Para ser notado pelos motoristas e evitar acidentes.",
        correct: true,
      },
      {
        option: "Para chamar a atenção dos pedestres.",
        correct: false,
      },
      {
        option: "Para evitar congestionamentos.",
        correct: false,
      },
    ],
  },
  {
    question:
      "O que significa ser previsível no trânsito ao pedalar uma bicicleta?",
    answers: [
      {
        option:
          "Sinalizar as intenções com antecedência e manter uma trajetória estável.",
        correct: true,
      },
      { option: "Realizar manobras arriscadas.", correct: false },
      {
        option: "Mudar constantemente de faixa.",
        correct: false,
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
