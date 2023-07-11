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
      "Qual é a principal preocupação em relação à infração de velocidade ao pilotar uma motocicleta?",
    answers: [
      {
        option: "O risco de acidentes",
        correct: true,
      },
      {
        option: "A sensação de liberdade",
        correct: false,
      },
      {
        option: "A emoção da velocidade",
        correct: false,
      },
      {
        option: "A aprovação dos outros motociclistas",
        correct: false,
      },
    ],
  },
  {
    question:
      "O que é importante para evitar a tentação de acelerar além do limite de velocidade?",
    answers: [
      { option: "Ignorar os conselhos dos outros", correct: false },
      {
        option: "Confiar na sorte",
        correct: false,
      },
      {
        option: "Autoconsciência e planejamento adequado",
        correct: true,
      },
      {
        option: "Seguir as regras apenas quando há fiscalização",
        correct: false,
      },
    ],
  },
  {
    question: "Qual é o papel de ser um bom exemplo no trânsito?",
    answers: [
      { option: "Ser reconhecido como o piloto mais rápido", correct: false },
      {
        option: "Influenciar positivamente outros motoristas e motociclistas",
        correct: true,
      },
      {
        option: "Aumentar a adrenalina e emoção ao pilotar",
        correct: false,
      },
      {
        option: "Ignorar as regras e fazer o que se deseja",
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
    <button class="answer_button finish_button-fer" data-correct="${answer.correct}">
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
