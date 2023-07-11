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
      "Qual é a primeira dica que Falcão menciona para uma direção segura?",
    answers: [
      {
        option: "Manter a calma no trânsito.",
        correct: false,
      },
      {
        option: "Respeitar as regras de trânsito.",
        correct: false,
      },
      {
        option: "Estar sempre atento.",
        correct: true,
      },
    ],
  },
  {
    question:
      "Segundo Falcão, por que é importante seguir as leis de trânsito?",
    answers: [
      { option: "Para evitar multas e penalidades.", correct: false },
      {
        option: "Para garantir a segurança de todos os usuários da via.",
        correct: true,
      },
      {
        option: "Para manter a ordem no tráfego.",
        correct: false,
      },
    ],
  },
  {
    question:
      "Qual é o exemplo de atitude positiva que Falcão destaca para um motorista?",
    answers: [
      { option: "Ultrapassar os limites de velocidade.", correct: false },
      {
        option: "Ignorar os pedestres nas faixas de travessia.",
        correct: false,
      },
      {
        option: "Ser cortês e empático.",
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
    <button class="answer_button finish_button-falcao" data-correct="${answer.correct}">
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
